import User from "@/models/UserModel";
import dbConnect from "@/db/dbConfig";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";

export const POST = async (request: NextRequest) => {
  try {
    const { email, password } = await request.json();
    await dbConnect();
    const userInDb = await User.findOne({ email: email });
    if (!userInDb) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    const isMatch = await bcrypt.compare(password, userInDb.password);
    if (!isMatch) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 400 }
      );
    }
    const token = JWT.sign({ id: userInDb._id }, process.env.JWT_SECRET!);
    return NextResponse.json({
      message: "User logged in successfully",
      success: true,
      token,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
