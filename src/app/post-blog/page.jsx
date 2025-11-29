import Heading from "@/components/Heading/Heading";
import MyContainer from "@/components/MyContainer/MyContainer";
import PostBlogForm from "@/components/PostBlogForm/PostBlogForm";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoutes";

export const metadata = {
  title: "Post Your Blog - CHRONOS",
  description: "Create your own blog and post in CHRONOS",
};

const PostBlogPage = () => {
  return (
    <ProtectedRoute>
      <section className="py-6 my-7">
        <MyContainer className="min-h-[70dvh] grid place-items-center gap-7">
          <Heading title="Post Your Blog Data" />

          <div className="max-w-xl w-full bg-primary/10 rounded-2xl shadow-xl">
            <PostBlogForm />
          </div>
        </MyContainer>
      </section>
    </ProtectedRoute>
  );
};

export default PostBlogPage;
