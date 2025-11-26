import { collections } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;

  if (id.length !== 24) {
    return NextResponse.json(
      {
        message: "Invalid ID",
      },
      {
        status: 400,
      }
    );
  }

  const query = { _id: new ObjectId(id) };

  try {
    const { blogs } = await collections();
    const result = await blogs.findOne(query);

    if (result) {
      return NextResponse.json({
        success: true,
        message: "Blog data retrieved successfully",
        blogData: result,
      });
    }

    return NextResponse.json(
      {
        message: "Blog data not found",
      },
      {
        status: 404,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  const { id } = await params;

  if (id.length !== 24) {
    return NextResponse.json(
      {
        message: "Invalid ID",
      },
      {
        status: 400,
      }
    );
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

    return NextResponse.json(
      {
        message: "Blog data not found",
      },
      {
        status: 404,
      }
    );
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      { status: 500 }
    );
  }
};
