
const BlogCardSkeleton = () => {
  return (
    <div className="card bg-base-100 shadow-xl animate-pulse">
      {/* Image Skeleton with gradient animation */}
      <figure className="w-full h-36 shrink-0 overflow-hidden">
        <div className="w-full h-full bg-linear-to-r from-base-200 via-base-300 to-base-200"></div>
      </figure>

      <div className="card-body gap-5 p-4">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-6 bg-base-300 rounded w-3/4"></div>
          <div className="h-6 bg-base-300 rounded w-1/2"></div>
        </div>

        {/* Description Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-base-300 rounded w-full"></div>
          <div className="h-4 bg-base-300 rounded w-full"></div>
          <div className="h-4 bg-base-300 rounded w-2/3"></div>
        </div>

        {/* Footer Skeleton */}
        <div className="card-actions justify-between items-center">
          <div className="flex items-center gap-3">
            {/* Avatar Skeleton */}
            <div className="avatar">
              <div className="size-9 bg-base-300 rounded-full"></div>
            </div>

            {/* Author and Date Skeleton */}
            <div className="flex flex-col gap-2">
              <div className="h-4 bg-base-300 rounded w-20"></div>
              <div className="h-3 bg-base-300 rounded w-24"></div>
            </div>
          </div>

          {/* Button Skeleton */}
          <div className="h-10 w-24 bg-base-300 rounded-btn"></div>
        </div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;