import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getToken } from "next-auth/jwt";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // Await the params since it's now a Promise
  const { id } = await params;
  const transactionId = parseInt(id, 10);

  if (isNaN(transactionId)) {
    return NextResponse.json(
      { message: "Invalid transaction ID" },
      { status: 400 }
    );
  }

  try {
    // Fetch the transaction where the user is either sender or receiver
    const transaction = await prisma.transaction.findFirst({
      where: {
        id: transactionId,
        OR: [
          { senderId: token.id as number },
          { receiverId: token.id as number },
        ],
      },
      include: {
        sender: { select: { email: true, fullName: true } },
        receiver: { select: { email: true, fullName: true } },
      },
    });

    if (!transaction) {
      return NextResponse.json(
        {
          message: `Transaction with ID ${transactionId} not found or unauthorized`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Transaction fetched successfully", data: transaction },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching transaction:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
