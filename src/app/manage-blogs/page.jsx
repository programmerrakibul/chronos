"use client";

import BlogTableRow from "@/components/BlogTableRow/BlogTableRow";
import MyContainer from "@/components/MyContainer/MyContainer";
import useAuthInfo from "@/hooks/useAuthInfo";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const ManageBlogs = () => {
  const { currentUser } = useAuthInfo();

  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs", currentUser.email],
    queryFn: async () => {
      const res = await axios.get("/api/blogs", {
        params: {
          email: currentUser.email,
        },
      });

      return res.data?.blogs;
    },
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section>
        <MyContainer>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Blog Management</h1>
          </div>

          <div className="overflow-x-auto">
            <table className="table">
              <thead>
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
                  />
                ))}
              </tbody>
            </table>
          </div>
        </MyContainer>
      </section>
    </>
  );
};

export default ManageBlogs;
