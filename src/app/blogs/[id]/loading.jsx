import MyContainer from "@/components/MyContainer/MyContainer";
import BackButton from "@/components/BackButton/BackButton";
import { FaCalendar, FaUser, FaTag } from "react-icons/fa";

const BlogDetailsSkeleton = () => {
  return (
    <section className="py-6 md:py-12 lg:py-16 animate-pulse">
      <MyContainer>
        <div className="mb-6 md:mb-8">
          <BackButton />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Category Badge Skeleton */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block mb-4 md:mb-6">
              <div className="h-10 w-32 bg-base-300 rounded-full mx-auto"></div>
            </div>

            {/* Title Skeleton */}
            <div className="space-y-3 mb-6 md:mb-8">
              <div className="h-8 md:h-10 lg:h-12 bg-base-300 rounded w-3/4 mx-auto"></div>
              <div className="h-8 md:h-10 lg:h-12 bg-base-300 rounded w-2/3 mx-auto"></div>
            </div>

            {/* Author & Date Info Skeleton */}
            <div className="flex flex-col items-center gap-6 mb-6">
              <div className="flex items-center gap-4 md:gap-6">
                {/* Avatar Skeleton */}
                <div className="avatar">
                  <div className="size-11 md:size-13 bg-base-300 rounded-full ring-2 ring-base-200"></div>
                </div>

                {/* Author & Date Info */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-base-300">
                    <FaUser className="text-lg" />
                    <div className="h-4 w-24 bg-base-300 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2 text-base-300">
                    <FaCalendar className="text-lg" />
                    <div className="h-4 w-32 bg-base-300 rounded"></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons Skeleton */}
              <div className="flex justify-center gap-3">
                <div className="h-10 w-24 bg-base-300 rounded-btn"></div>
                <div className="h-10 w-24 bg-base-300 rounded-btn"></div>
              </div>
            </div>
          </div>

          {/* Featured Image Skeleton */}
          <div className="mb-8 md:mb-12">
            <div className="rounded-xl md:rounded-2xl overflow-hidden bg-base-300">
              <div className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-linear-to-r from-base-300 via-base-200 to-base-300"></div>
            </div>
          </div>

          {/* Content Skeleton */}
          <div className="max-w-none">
            {/* Description Skeleton */}
            <div className="mb-8 md:mb-12 space-y-3">
              <div className="h-6 bg-base-300 rounded w-full"></div>
              <div className="h-6 bg-base-300 rounded w-full"></div>
              <div className="h-6 bg-base-300 rounded w-2/3"></div>
            </div>

            {/* Tags Section Skeleton */}
            <div className="mb-8 md:mb-12 p-6 md:p-8 bg-base-100 border border-base-300 rounded-xl md:rounded-2xl">
              <div className="flex items-center gap-2 mb-6 text-base-300">
                <FaTag className="text-lg" />
                <div className="h-6 w-16 bg-base-300 rounded"></div>
              </div>

              {/* Tags Skeleton */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="h-8 w-20 bg-base-300 rounded-full"
                  ></div>
                ))}
              </div>
            </div>

            {/* Blog Content Skeleton */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="h-5 bg-base-300 rounded w-full"></div>
                <div className="h-5 bg-base-300 rounded w-full"></div>
                <div className="h-5 bg-base-300 rounded w-4/5"></div>
              </div>

              <div className="space-y-3 mt-8">
                <div className="h-5 bg-base-300 rounded w-full"></div>
                <div className="h-5 bg-base-300 rounded w-3/4"></div>
                <div className="h-5 bg-base-300 rounded w-full"></div>
              </div>

              <div className="space-y-3 mt-8">
                <div className="h-5 bg-base-300 rounded w-2/3"></div>
                <div className="h-5 bg-base-300 rounded w-full"></div>
                <div className="h-5 bg-base-300 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </MyContainer>
    </section>
  );
};

export default BlogDetailsSkeleton;
