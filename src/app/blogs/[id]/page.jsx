import MyContainer from "@/components/MyContainer/MyContainer";
import { formatDate } from "@/utilities/formatDate";
import axios from "axios";
import { FaCalendar, FaUser, FaTag, FaShare, FaBookmark } from "react-icons/fa";
import BackButton from "@/components/BackButton/BackButton";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const { data } = await axios.get(
      `${process.env.SITE_DOMAIN}/api/blogs/${id}`
    );

    const blogData = data.blogData || {};

    return {
      title: `${blogData.title} - CHRONOS`,
      description: "Read this interesting blog post",
    };
  } catch {
    return {
      title: "Blog Post - CHRONOS",
      description: "Read this interesting blog post",
    };
  }
}

const BlogDetails = async ({ params }) => {
  const { id } = await params;
  const { data } = await axios.get(
    `${process.env.SITE_DOMAIN}/api/blogs/${id}`
  );

  const blogData = data.blogData || {};

  console.log(blogData);

  return (
    <section className="py-6 md:py-12 lg:py-16">
      <MyContainer>
        <div className="mb-6 md:mb-8">
          <BackButton />
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
                <button className="btn btn-outline btn-sm md:btn-md gap-2 px-4 md:px-6 hover:bg-base-200 transition-all">
                  <FaBookmark className="text-sm" />
                  <span className="text-sm md:text-base">Save</span>
                </button>

                <button className="btn btn-outline btn-sm md:btn-md gap-2 px-4 md:px-6 hover:bg-base-200 transition-all">
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
