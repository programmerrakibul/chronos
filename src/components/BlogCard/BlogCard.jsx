"use client";

import { formatDate } from "@/utilities/formatDate";
import MyButton from "../MyButton/MyButton";
import { useRouter } from "next/navigation";

export default function BlogCard({ blogData }) {
  const router = useRouter();

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Blog Image */}
      <figure className="w-full h-36 flex-shrink-0">
        <img
          src={blogData.imageURL}
          alt={blogData.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body gap-5 p-4">
        <h2 className="card-title text-lg font-bold line-clamp-2">
          {blogData.title}
        </h2>

        <p className="line-clamp-3">{blogData.description}</p>

        <div className="card-actions justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Author Avatar */}
            <div className="avatar">
              <div className="size-9 rounded-full">
                <img
                  src={blogData.author.image}
                  alt={blogData.author.name}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Author Name and Date */}
            <div className="flex flex-col text-sm">
              <span className="font-bold">{blogData.author.name}</span>

              <span>
                {formatDate(blogData.publishedOn)}
              </span>
            </div>
          </div>

          <MyButton onClick={() => router.push(`/blogs/${blogData._id}`)}>
            Read Blog
          </MyButton>
        </div>
      </div>
    </div>
  );
}
