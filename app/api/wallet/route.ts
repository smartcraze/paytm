import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { getToken } from "next-auth/jwt";

export async function GET(req: NextRequest) {
  // Get the JWT token
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    // Fetch the wallet using the user's ID from the token
    const wallet = await prisma.wallet.findUnique({
      where: { userId: token.id as number }, // Look for the wallet by userId
    });

    if (!wallet) {
      return NextResponse.json(
        { message: "Wallet not found" },
        { status: 404 }
      );
    }

    // Return the balance of the wallet
    return NextResponse.json({ balance: wallet.balance });
  } catch (error) {
    console.error("Error fetching wallet:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
