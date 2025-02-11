import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getToken } from "next-auth/jwt";

export async function POST(req: NextRequest) {
  const { receiverId, phoneNumber, amount } = await req.json();

  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    let finalReceiverId = receiverId;

    if (phoneNumber && phoneNumber.length === 10) {
      const receiver = await prisma.user.findUnique({
        where: { phoneNumber },
      });
      if (!receiver) {
        return NextResponse.json(
          { message: "Receiver not found" },
          { status: 404 }
        );
      }
      finalReceiverId = receiver.id;
    }

    if (!finalReceiverId) {
      return NextResponse.json(
        { message: "Receiver ID or phone number is required" },
        { status: 400 }
      );
    }

    const transactionResult = await prisma.$transaction(async (prisma) => {
      const senderWallet = await prisma.wallet.findUnique({
        where: { userId: token.id as number },
      });

      if (!senderWallet || senderWallet.balance < amount) {
        throw new Error("Insufficient balance");
      }

      const receiverWallet = await prisma.wallet.findUnique({
        where: { userId: finalReceiverId },
      });

      if (!receiverWallet) {
        throw new Error("Receiver wallet not found");
      }

      const transaction = await prisma.transaction.create({
        data: {
          senderId: token.id as number,
          receiverId: finalReceiverId,
          amount,
          type: "TRANSFER",
          status: "COMPLETED",
        },
      });

      await prisma.wallet.update({
        where: { userId: token.id as number },
        data: { balance: senderWallet.balance - amount },
      });

      await prisma.wallet.update({
        where: { userId: finalReceiverId },
        data: { balance: receiverWallet.balance + amount },
      });

      return transaction;
    });

    return NextResponse.json(
      { message: "Transaction successful", data: transactionResult },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Transaction Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 }
    );
  }
}
