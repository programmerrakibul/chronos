"use client";

import BlogTableRow from "@/components/BlogTableRow/BlogTableRow";
import Heading from "@/components/Heading/Heading";
import Loader from "@/components/Loader/Loader";
import MyContainer from "@/components/MyContainer/MyContainer";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoutes";
import useAuthInfo from "@/hooks/useAuthInfo";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "sonner";
import Swal from "sweetalert2";

const ManageBlogs = () => {
  const { currentUser } = useAuthInfo();

  const {
    data: blogs,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["blogs", currentUser?.email],
    queryFn: async () => {
      const res = await axios.get("/api/blogs", {
        params: {
          email: currentUser?.email,
        },
      });

      return res.data?.blogs;
    },
  });

  if (isPending) {
    return <Loader className="min-h-[60dvh]" />;
  }

  const handleRemoveBlog = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleting",
        });

        Swal.showLoading();

        const { data } = await axios.delete(`/api/blogs/${id}`);

        if (data.deletedCount) {
          setTimeout(() => {
            refetch();
            Swal.hideLoading();

            Swal.fire({
              title: "Deleted! ",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }, 200);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

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

              <tbody>
                {blogs.map((blog, index) => (
                  <BlogTableRow
                    key={blog._id}
                    index={index + 1}
                    blogData={blog}
                    handleRemoveBlog={handleRemoveBlog}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </MyContainer>
      </section>
    </ProtectedRoute>
  );
};

export default ManageBlogs;
