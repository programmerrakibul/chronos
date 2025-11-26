"use client";

import BlogCard from "@/components/BlogCard/BlogCard";
import MyContainer from "@/components/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const BlogsPage = () => {
  const { data: blogs, isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await axios.get("/api/blogs");
      return res.data?.blogs;
    },
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <MyContainer>
          <div>
            <h1>All blogs</h1>
          </div>

          <div className="grid grid-cols-3 gap-7">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blogData={blog} />
            ))}
          </div>
        </MyContainer>
      </section>
    </>
  );
};

export default BlogsPage;
