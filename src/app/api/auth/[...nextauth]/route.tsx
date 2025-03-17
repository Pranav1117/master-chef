import NextAuth from "next-auth";
import { authOptions } from "@/lib/utils";

// @ts-expect-error
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
