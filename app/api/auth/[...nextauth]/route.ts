import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      //@ts-ignore
      async authorize(credentials: any, req) {
        const { username, password } = credentials;
        const user = {
          name: "suraj vishwakarma",
          email: "suraj@gmail.com",
          username,
          password,
        };
        console.log(user);
        console.log("logging credentials");
        console.log(credentials);

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
