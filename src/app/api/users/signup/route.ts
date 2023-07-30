import User from "@/models/UserModel";
import dbConnect from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request: NextRequest) => {
  try {
    const { username, email, password } = await request.json();
    await dbConnect();
    const userInDb = await User.findOne({ email: email });
    if (userInDb) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    //hash password
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      userName: username,
      email: email,
      password: hashPassword,
    });
    const savedUser = await newUser.save();
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
