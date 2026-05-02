import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import bcrypt from "bcrypt";
import { generateToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // check user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // check password
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // create token
    const token = generateToken(user.id, user.email);

    // send cookie
    const response = NextResponse.json({
      message: "Logged in successfully",
      user: { id: user.id, email: user.email, name: user.name, role: user.role }
    });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: false,
      path: "/",
    });

    return response;
    
  } catch  {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
