"use client";

import MyContainer from "@/components/MyContainer/MyContainer";
import { formatDate } from "@/utilities/formatDate";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import {
  FaCalendar,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaShare,
  FaBookmark,
} from "react-icons/fa";
import { toast } from "sonner";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data: blogData = {}, isPending } = useQuery({
    queryKey: ["blog", id],
    queryFn: async () => {
      const { data } = await axios.get(`/api/blogs/${id}`);
      return data?.blogData;
    },
  });

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="loading loading-spinner loading-lg text-primary"></div>
          <p className="text-base-content/70">Loading blog post...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-6 md:py-12 lg:py-16">
      <MyContainer>
        <div className="mb-6 md:mb-8">
          <button
            onClick={() => router.back()}
            className="btn btn-ghost btn-sm md:btn-md gap-2 px-4 hover:bg-base-200 transition-all duration-200"
          >
            <FaArrowLeft className="text-sm" />
            <span className="text-sm md:text-base">Go Back</span>
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4 md:mb-6">
              <span className="badge badge-primary badge-lg md:badge-xl px-4 py-3 text-sm md:text-base font-semibold">
                {blogData.category}
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8 leading-tight md:leading-snug">
              {blogData.title}
            </h1>

            <div className="flex flex-col items-center gap-4 text-base-content/70 mb-6">
              <div className="flex  items-center gap-4 md:gap-6">
                <div className="avatar">
                  <div className="size-11 md:size-13 rounded-full ring-2 ring-base-300">
                    <img
                      src={blogData.author.image}
                      alt={blogData.author.name}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-sm md:text-base" />
                    <span className="text-sm md:text-base font-medium">
                      {blogData.author.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-sm md:text-base" />
                    <span className="text-sm md:text-base">
                      {formatDate(blogData.publishedOn)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-3 mt-2">
                <button
                  onClick={() => toast.info("Feature is coming soon!")}
                  className="btn btn-outline btn-sm md:btn-md gap-2 px-4 md:px-6 hover:bg-base-200 transition-all"
                >
                  <FaBookmark className="text-sm" />
                  <span className="text-sm md:text-base">Save</span>
                </button>

                <button
                  onClick={() => toast.info("Feature is coming soon!")}
                  className="btn btn-outline btn-sm md:btn-md gap-2 px-4 md:px-6 hover:bg-base-200 transition-all"
                >
                  <FaShare className="text-sm" />
                  <span className="text-sm md:text-base">Share</span>
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8 md:mb-12">
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl">
              <img
                src={blogData.imageURL}
                alt={blogData.title}
                className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="prose prose-sm sm:prose-base md:prose-lg lg:prose-xl max-w-none">
            <div className="mb-8 md:mb-12">
              <p className="text-lg md:text-xl lg:text-2xl leading-relaxed md:leading-loose text-base-content/80 font-light">
                {blogData.description}
              </p>
            </div>

            <div className="mb-8 md:mb-12 p-6 md:p-8 bg-accent/20 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-2 mb-4">
                <FaTag className="text-base-content/70 text-lg" />
                <span className="font-semibold text-lg md:text-xl">Tags</span>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {blogData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="badge badge-outline badge-lg md:badge-xl px-4 py-3 text-sm md:text-base hover:badge-primary hover:text-primary cursor-default transition-all duration-300 hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default BlogDetails;
