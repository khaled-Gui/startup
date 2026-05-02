import { NextResponse } from "next/server";
//import { prisma } from "../../../lib/prisma";
import bcrypt from "bcrypt";


export async function POST(req: Request) {
  try {
    const {  password } = await req.json();

    // check user



    // check password
    const isValid = await bcrypt.compare(password, password);

    if (!isValid) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 400 }
      );
    }

    // create token

    // send cookie
 

 

    return NextResponse.json(
      { message: "Logged in successfully" },
      {
        status: 200,
        headers: {
          "Set-Cookie": `token= HttpOnly; Path=/; Max-Age=3600; SameSite=Lax; ${
            process.env.NODE_ENV === "production" ? "Secure;" : ""
          }`,
        },
      }
    );
  } catch  {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
