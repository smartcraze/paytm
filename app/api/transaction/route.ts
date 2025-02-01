import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        OR: [
          { senderId: token.id as number },
          { receiverId: token.id as number },
        ],
      },
      include: {
        sender: { select: { email: true, fullName: true } },
        receiver: { select: { email: true, fullName: true } },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(
      { message: "Transactions fetched successfully", data: transactions },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching transactions:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
