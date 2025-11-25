import { collections } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(await request.url);
  const email = searchParams.get("email");
  const query = {};

  if (email) {
    query.authorEmail = email;
  }

  try {
    const { blogs } = await collections();
    const result = await blogs.find(query).toArray();

    return NextResponse.json({
      success: true,
      message: "Blogs data retrieved successfully",
      blogs: result,
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: err.message,
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (request) => {
  const newPost = await request.json();
  newPost.publishedOn = new Date().toISOString();

  try {
    const { blogs } = await collections();
    const result = await blogs.insertOne(newPost);

    return NextResponse.json({
      success: true,
      message: "Blog data posted successfully",
      ...result,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
