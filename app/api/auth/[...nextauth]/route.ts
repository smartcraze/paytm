import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        name: {
          label: "Name",
          type: "text",
          placeholder: "Suraj Vishwakarma",
        },
        email: {
          label: "Email",
          type: "email",
          placeholder: "suraj@gmail.com",
        },
        phoneNo: {
          label: "Phone No",
          type: "text",
          placeholder: "1234567890",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      //@ts-ignore
      async authorize(credentials: any, req) {
        console.log("logging credentials");
        console.log(credentials);

        return credentials;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
