import { collections } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { blogs } = await collections();
    const allBlogs = await blogs.find({}).toArray();
    const categories = [
      ...new Set(allBlogs.map((item) => item.category)),
    ].reduce((acc, item, i) => {
      if (item) {
        acc.push({
          id: i + 2,
          name: item,
        });
      }

      return acc;
    }, []);

    categories.unshift({
      id: 1,
      name: "All",
    });

    return NextResponse.json({
      success: true,
      message: "Category data retrieved successfully",
      categories,
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: err.message },
      {
        status: 500,
      }
    );
  }
};
