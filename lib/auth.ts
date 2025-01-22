import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./db"; // Ensure your Prisma client is properly initialized
import bcrypt from "bcrypt";

export const authoptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        fullName: { label: "Full Name", type: "text", placeholder: "Suraj" },
        email: {
          label: "Email",
          type: "email",
          placeholder: "suraj@gmail.com",
        },
        phone: { label: "Phone", type: "text", placeholder: "1234567890" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required.");
          }

          const existingUser = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (existingUser) {
            // Login Flow
            const isValidPassword = await bcrypt.compare(
              credentials.password,
              existingUser.password
            );

            if (!isValidPassword) {
              throw new Error("Invalid credentials.");
            }

            return { email: existingUser.email, name: existingUser.fullName };
          } else {
            // Registration Flow
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const newUser = await prisma.user.create({
              data: {
                email: credentials.email,
                password: hashedPassword,
                fullName: credentials.fullName,
                phoneNumber: credentials.phone,
              },
            });

            return { email: newUser.email, name: newUser.fullName };
          }
        } catch (error) {
          console.error("Authorization error:", error);
          throw new Error("Authentication failed.");
        }
      },
    }),
  ],
};
