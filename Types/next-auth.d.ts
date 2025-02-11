import { DefaultSession } from "next-auth";

declare module "next-auth" {
  export interface Wallet {
    balance: number;
  }

  interface User {
    id: number;
    email: string;
    fullName: string;
    wallet?: Wallet;
  }

  interface Session {
    user: User & DefaultSession["user"];
  }
}
