import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(credentials: any) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing email or password");
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) throw new Error("No user found with this email");
        if (!user.password)
          throw new Error("Account is registered with google mail");

        const isValid = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isValid) throw new Error("Invalid credentials");

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if (!user || !user.email) {
        return false;
      }

      if (account?.provider === "google") {
        try {
          const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
          });

          if (!existingUser) {
            await prisma.user.create({
              data: {
                email: user.email,
                name: user.name || "Unknown",
                password: "",
              },
            });
          }
        } catch (error) {
          return false;
        }
      }
      return true;
    },
    session: async ({ session, token, user }: any) => {
      if (session && session.user) {
        const userData = await prisma.user.findUnique({
          where: { email: session.user.email },
          select: { id: true, createdAt: true },
        });
        if (userData) {
          session.user.id = userData.id;
          session.user.dateJoined = userData.createdAt;
        }
        return session;
      }
    },
    async redirect({ url, baseUrl }) {
      if (url === "/auth/signin") return "/profile";
      return baseUrl;
    },
  },
});

export { handler as GET, handler as POST };
