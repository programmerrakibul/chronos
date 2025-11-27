import { FaEnvelope, FaUserEdit, FaTwitter, FaLinkedin } from "react-icons/fa";
import MyContainer from "../MyContainer/MyContainer";
import Heading from "../Heading/Heading";

const AuthorsSection = () => {
  const authors = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      posts: 24,
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@example.com",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      posts: 18,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      email: "emily@example.com",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      posts: 32,
    },
    {
      id: 4,
      name: "Alex Thompson",
      email: "alex@example.com",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      posts: 15,
    },
    {
      id: 5,
      name: "Priya Patel",
      email: "priya@example.com",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      posts: 28,
    },
    {
      id: 6,
      name: "David Kim",
      email: "david@example.com",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
      posts: 19,
    },
  ];

  return (
    <section className="py-12">
      <MyContainer className="space-y-10">
        <Heading title="Our Authors" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {authors.map((author) => (
            <div
              key={author.id}
              className="card bg-base-200 shadow-md hover:shadow-lg transition-all duration-300 cursor-default"
            >
              <div className="card-body p-4 text-center">
                {/* Avatar */}
                <div className="avatar justify-center mb-3">
                  <div className="w-16 h-16 rounded-full ring-2 ring-primary ring-offset-2 ring-offset-base-200 group-hover:ring-secondary transition-all duration-300">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="object-cover"
                    />
                  </div>
                </div>

                <h3 className="card-title text-sm justify-center text-base-content group-hover:text-primary transition-colors duration-300 mb-1">
                  {author.name}
                </h3>

                <div className="flex items-center justify-center gap-1 text-xs text-base-content/70 mb-2">
                  <FaEnvelope className="text-xs" />
                  <span className="truncate">{author.email}</span>
                </div>

                <div className="badge badge-outline badge-sm">
                  {author.posts} posts
                </div>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default AuthorsSection;
