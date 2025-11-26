"use client";

import BlogCard from "@/components/BlogCard/BlogCard";
import Heading from "@/components/Heading/Heading";
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
      <section className="my-7 py-6">
        <MyContainer className="space-y-10">
          <Heading
            title="Get Lost in a Good Read"
            subTitle="Welcome to our library of stories and ideas. Find a comfortable spot, and explore everything from quick personal reflections to deep, thought-provoking essays."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
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
