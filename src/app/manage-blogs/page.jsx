import MyContainer from "@/components/MyContainer/MyContainer";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoutes";
import Heading from "@/components/Heading/Heading";
import BlogTableBody from "@/components/BlogTableBody/BlogTableBody";

export const metadata = {
  title: "Manage Your Blogs - CHRONOS",
  description: "Manage your all posting blog posts",
};

const ManageBlogs = () => {
  return (
    <ProtectedRoute>
      <section className="py-10 md:py-16 my-4">
        <MyContainer className="space-y-7">
          <Heading title="Manage Your Blogs" />

          <div className="overflow-x-auto ">
            <table className="table bg-indigo-50 shadow-lg">
              <thead className="text-neutral bg-indigo-100">
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Published Date</th>
                  <th>Action</th>
                </tr>
              </thead>

              <BlogTableBody />
            </table>
          </div>
        </MyContainer>
      </section>
    </ProtectedRoute>
  );
};

export default ManageBlogs;
