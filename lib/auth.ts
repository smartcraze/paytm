import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./db";
prisma.$connect();
export const authoptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      //@ts-ignore
      async authorize(credentials, req) {
        console.log("credentials", credentials);

        return {
          id: 1,
          name: "John Doe",
          email: "suraj@gmail.com",
        };
      },
    }),
  ],
};
