import { NextResponse } from "next/server";
//import { prisma } from "@/lib/prisma";
//i/mport bcrypt from "bcrypt";
///import { generateToken } from "@/lib/auth";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    // Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Password validation (min 8 characters)
    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters long" },
        { status: 400 }
      );
    }

    // check user
    

    // hash password
    

    // create user
    

    // Generate JWT token
    

    // Prepare user response (exclude password for security)
 


    // Create response
    

    // Set token in cookie


    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );

  } catch (error) {
    console.error("Registration error:", error);
    
    if (error instanceof Error) {
      if (error.message.includes("Unique constraint failed")) {
        return NextResponse.json(
          { error: "Email already registered" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json(
      { error: "Registration failed. Please try again." },
      { status: 500 }
    );
  }
}
