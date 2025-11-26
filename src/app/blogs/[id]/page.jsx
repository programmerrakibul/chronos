import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoutes";
import { formatDate } from "@/utilities/formatDate";
import axios from "axios";
import {
  FaCalendar,
  FaUser,
  FaTag,
  FaArrowLeft,
  FaShare,
  FaBookmark,
} from "react-icons/fa";

const BlogDetails = async ({ params }) => {
  const { id } = await params;
  const { data } = await axios.get(
    `${process.env.SITE_DOMAIN}/api/blogs/${id}`
  );

  const { blogData } = data || {};

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <div className="mb-6">
            <button className="btn btn-ghost btn-sm">
              <FaArrowLeft className="mr-2" />
              Back
            </button>
          </div>

          {/* Blog Header */}
          <div className="text-center mb-8">
            <div className="badge badge-primary badge-lg mb-4">
              {blogData.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {blogData.title}
            </h1>

            {/* Author and Date Info */}
            <div className="flex flex-col items-center justify-center gap-4 text-base-content/70 mb-6">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full">
                    <img
                      src={blogData.author.image}
                      alt={blogData.author.name}
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <FaUser className="text-sm" />
                  <span>{blogData.author.name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaCalendar className="text-sm" />
                  <span>{formatDate(blogData.publishedOn)}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-2 mb-8">
                <button className="btn btn-outline btn-sm">
                  <FaBookmark className="mr-2" />
                  Save
                </button>
                <button className="btn btn-outline btn-sm">
                  <FaShare className="mr-2" />
                  Share
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={blogData.imageURL}
                  alt={blogData.title}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              {/* Description */}
              <div className="mb-8">
                <p className="text-xl leading-relaxed text-base-content/80">
                  {blogData.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <FaTag className="text-base-content/70" />
                  <span className="font-semibold">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blogData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge badge-outline badge-lg hover:badge-primary cursor-pointer transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default BlogDetails;
