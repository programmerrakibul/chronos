"use client";

import useAuthInfo from "@/hooks/useAuthInfo";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import Swal from "sweetalert2";
import { toast } from "sonner";
import BlogTableRow from "../BlogTableRow/BlogTableRow";
import axios from "axios";

const BlogTableBody = () => {
  const { currentUser } = useAuthInfo();

  const {
    data: blogs = [],
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
    <>
      <tbody>
        {isPending ? (
          <tr>
            <td className="w-full" colSpan={6}>
              <Loader />
            </td>
          </tr>
        ) : (
          blogs.map((blog, index) => (
            <BlogTableRow
              key={blog._id}
              index={index + 1}
              blogData={blog}
              handleRemoveBlog={handleRemoveBlog}
            />
          ))
        )}
      </tbody>
    </>
  );
};

export default BlogTableBody;
