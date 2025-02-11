import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import { RegisterSchema } from "@/zodSchema/zod";

export async function POST(req: NextRequest) {
  try {
    const { email, password, fullname, phoneNumber } = RegisterSchema.parse(
      await req.json()
    );

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        fullName: fullname,
        phoneNumber,
        wallet: {
          create: {
            balance: 1000,
          },
        },
      },
    });

    return NextResponse.json(
      { message: "User created successfully", data: newUser },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: error.message,
        message: "Something went wrong",
      },
      { status: 400 }
    );
  }
}
