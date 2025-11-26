import { collections } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  const { id } = await params;

  if (id.length !== 24) {
    return NextResponse.json({
      message: "Invalid ID",
    });
  }

  const query = { _id: new ObjectId(id) };

  try {
    const { blogs } = await collections();
    const result = await blogs.deleteOne(query);

    if (result.deletedCount) {
      return NextResponse.json({
        success: true,
        message: "Blog data deleted successfully",
        ...result,
      });
    }

    return NextResponse.json({
      message: "Blog data not found",
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
