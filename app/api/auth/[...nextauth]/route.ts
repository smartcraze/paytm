import { authoptions } from "@/lib/auth";
import NextAuth from "next-auth";
//@ts-ignore
const handler = NextAuth(authoptions);

export { handler as GET, handler as POST };
