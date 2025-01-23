import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./db";
import bcrypt from "bcrypt";
import { NextAuthOptions } from "next-auth";

export const authoptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "******",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }
        const { email, password } = credentials;
        const user = await prisma.user.findUnique({ where: { email } });
        if (!user) {
          throw new Error("No user found");
        }
        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }

        return {
          id: user.id.toString(),
          email: user.email,
          fullName: user.fullName,
          phoneNumber: user.phoneNumber,
          walletBalance: user.walletBalance,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  // pages: {
  //   signIn: "/signin",
  // }
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
      }
      return token;
    },
    async session({ session, token }) {
      console.log(token);
      console.log(session);

      session.user = {
        email: token.email,
      };
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
