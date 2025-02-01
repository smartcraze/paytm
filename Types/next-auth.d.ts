import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: Number;
      email: string;
      walletBalance: Number;
      fullName: string;
    } & DefaultSession["user"];
  }

  interface User {
    id: Number;
    email: string;
    walletBalance: Number;
    fullName: string;
  }
}
