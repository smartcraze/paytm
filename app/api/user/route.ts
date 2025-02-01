import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = await getToken({
      req,
      secret: process.env.SECRET,
      raw: true,
    });
    const decodedToken = await getToken({ req, secret: process.env.SECRET });

    if (token && decodedToken) {
      return NextResponse.json({
        message: "You are authorized",
        decodedToken,
        jwt: token,
      });
    } else {
      return NextResponse.json({
        message: "You are not authorized",
      });
    }
  } catch (e: any) {
    return NextResponse.json({
      message: "You are not authorized",
      error: e.message,
    });
  }
}
