"use client";

import BlogCard from "@/components/BlogCard/BlogCard";
import Heading from "@/components/Heading/Heading";
import Loader from "@/components/Loader/Loader";
import MyContainer from "@/components/MyContainer/MyContainer";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

const BlogsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const { data: blogs = [], isLoading } = useQuery({
    queryKey: ["blogs", searchText, filterValue],
    queryFn: async () => {
      const { data } = await axios.get("/api/blogs", {
        params: {
          search: searchText,
          category: filterValue,
        },
      });
      return data?.blogs;
    },
  });

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const { data } = await axios.get("/api/blogs/categories");
      return data?.categories;
    },
  });

  return (
    <>
      <section className="my-7 py-6">
        <MyContainer className="space-y-10">
          <Heading
            title="Get Lost in a Good Read"
            subTitle="Welcome to our library of stories and ideas. Find a comfortable spot, and explore everything from quick personal reflections to deep, thought-provoking essays."
          />

          <div className="join flex justify-center">
            <div className="relative w-48 transition-all join-item">
              <input
                type="search"
                placeholder="Search..."
                disabled={isLoading}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value.trim())}
                className="input py-2 pl-10 pr-4 min-w-[190px]"
              />
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <FiSearch />
              </span>
            </div>

            <select
              name="categoryFilter"
              value={filterValue}
              disabled={categories.length === 0}
              onChange={(e) => setFilterValue(e.target.value)}
              className="select w-16! px-2 md:px-3 py-0 md:py-1 tracking-wider join-item"
            >
              <option value="">All</option>
              {categories.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>
          </div>

          {isLoading ? (
            <Loader />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
              {blogs?.map((blog) => (
                <BlogCard key={blog._id} blogData={blog} />
              ))}
            </div>
          )}
        </MyContainer>
      </section>
    </>
  );
};

export default BlogsPage;
