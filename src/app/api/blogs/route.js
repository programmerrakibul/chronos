import { collections } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newPost = await request.json();

  try {
    const { blogs } = await collections();
    const result = await blogs.insertOne(newPost);

    return NextResponse.json({
      success: true,
      message: "Blog data posted successfully",
      blogs: result,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
