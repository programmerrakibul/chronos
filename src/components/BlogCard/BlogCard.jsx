import { formatDate } from "@/utilities/formatDate";
import MyButton from "../MyButton/MyButton";

export default function BlogCard({ blogData }) {
  return (
    <div className="card card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      {/* Blog Image */}
      <figure className="w-32 flex-shrink-0">
        <img
          src={blogData.imageURL}
          alt={blogData.title}
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body p-4">
        {/* Title */}
        <h2 className="card-title text-md font-bold line-clamp-1">
          {blogData.title}
        </h2>

        {/* Short Description */}
        <p className="text-base-content/70 text-sm line-clamp-2 mb-2">
          {blogData.description}
        </p>

        <div className="card-actions justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Author Avatar */}
            <div className="avatar">
              <div className="w-6 h-6 rounded-full">
                <img
                  src={blogData.author.image}
                  alt={blogData.author.name}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Author Name and Date */}
            <div className="flex flex-col">
              <span className="text-xs font-medium">
                {blogData.author.name}
              </span>
              <span className="text-xs text-base-content/50">
                {formatDate(blogData.publishedOn)}
              </span>
            </div>
          </div>

          {/* Details Button */}
          <MyButton className="btn-sm!">Read</MyButton>
        </div>
      </div>
    </div>
  );
}
