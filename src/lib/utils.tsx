import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from "@aws-sdk/client-s3";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { PrismaClient, User } from "@prisma/client";
import { Session } from "inspector/promises";
import { JWT } from "next-auth/jwt";
import { MimeType } from "@/types";
import { Account, NextAuthOptions } from "next-auth";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "" },
        password: { label: "password", type: "password", placeholder: "" },
      },
      async authorize(
        credentials: Record<"email" | "password", string> | undefined
      ) {
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
    async signIn({ user, account }: { user: User; account: Account | null }) {
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
          console.error("Failed to fetch recipe details:", error);
          return false;
        }
      }
      return true;
    },
    session: async ({ session }: { session: Session; token: JWT }) => {
      if (session?.user) {
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
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      if (url === "/auth/signin") return "/profile";
      return baseUrl;
    },
  },
};

export function getS3Client() {
  const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_BUCKET_ACCESS_KEY,
      secretAccessKey: process.env.AWS_BUCKET_SECRET_ACCESS_KEY,
    },
  });
  return s3Client;
}

export function getAwsPutCommand(objectKey: string, type?: MimeType) {
  return new PutObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: objectKey,
    ContentType: type,
  });
}

export function getAwsGetCommand(objectKey: string) {
  return new GetObjectCommand({
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: objectKey,
  });
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-IN", {
    day: "numeric", // e.g., "5"
    month: "long", // e.g., "March"
    year: "numeric", // e.g., "2022"
  });
}
