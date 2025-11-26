"use client";

import ErrorText from "@/components/ErrorText/ErrorText";
import MyButton from "@/components/MyButton/MyButton";
import MyContainer from "@/components/MyContainer/MyContainer";
import MyInput from "@/components/MyInput/MyInput";
import MyLabel from "@/components/MyLabel/MyLabel";
import ProtectedRoute from "@/components/ProtectedRoutes/ProtectedRoutes";
import useAuthInfo from "@/hooks/useAuthInfo";
import { getUploadImage } from "@/utilities/getUploadImage";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const PostBlogPage = () => {
  const { currentUser } = useAuthInfo();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handlePublishBlog = async (data) => {
    const { title, image, category, tags, description } = data;
    const allTags = tags.split(",").reduce((acc, tag) => {
      acc.push(tag.trim());
      return acc;
    }, []);

    const newPost = {
      title,
      category,
      description,
      tags: allTags,
      author: {
        name: currentUser.displayName,
        email: currentUser.email,
        image: currentUser.photoURL,
      },
    };

    try {
      const imageURL = await getUploadImage(image[0]);
      const { data } = await axios.post("/api/blogs", { ...newPost, imageURL });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProtectedRoute>
      <section className="py-6 my-7">
        <MyContainer className="min-h-[70dvh] grid place-items-center">
          <div className="max-w-xl w-full">
            <form onSubmit={handleSubmit(handlePublishBlog)}>
              <div className="fieldset text-base gap-3.5">
                {/* Title */}
                <div className="space-y-1.5">
                  <MyLabel label="Title" htmlFor="title" />
                  <MyInput
                    id="title"
                    placeholder="The Future of Artificial Intell..."
                    {...register("title", {
                      required: "Title is required",
                      validate: (value) => {
                        if (!value.trim()) return "Title is required";
                      },
                    })}
                  />

                  {errors.title && <ErrorText label={errors.title.message} />}
                </div>

                <div className="flex items-center gap-6 justify-between">
                  {/* Category */}
                  <div className="flex-1 space-y-1.5">
                    <MyLabel label="Category" htmlFor="category" />
                    <select
                      id="category"
                      className="select select-bordered"
                      {...register("category", {
                        required: "Category is required",
                      })}
                    >
                      <option value="">Select category</option>
                      <option value="technology">Technology</option>
                      <option value="lifestyle">Lifestyle</option>
                      <option value="travel">Travel</option>
                      <option value="food">Food</option>
                      <option value="health">Health</option>
                      <option value="business">Business</option>
                      <option value="education">Education</option>
                      <option value="entertainment">Entertainment</option>
                    </select>

                    {errors.category && (
                      <ErrorText label={errors.category.message} />
                    )}
                  </div>

                  {/* Tags */}
                  <div className="space-y-1.5 flex-1">
                    <MyLabel
                      label="Tags (Separate with comma)"
                      htmlFor="tags"
                    />
                    <MyInput
                      id="tags"
                      placeholder="E.g. technology, tips, web-dev"
                      {...register("tags", {
                        required: "Tags is required",
                        validate: (value) => {
                          if (!value.trim()) return "Tags is required";
                        },
                      })}
                    />

                    {errors.tags && <ErrorText label={errors.tags.message} />}
                  </div>
                </div>

                {/* Image */}
                <div className="space-y-1.5">
                  <MyLabel label="Image" htmlFor="image" />
                  <input
                    type="file"
                    id="image"
                    className="file-input w-full"
                    {...register("image", {
                      required: "Image is required",
                    })}
                  />

                  {errors.image && <ErrorText label={errors.image.message} />}
                </div>

                {/* Description */}
                <div className="space-y-1.5">
                  <MyLabel label="Description" htmlFor="description" />
                  <textarea
                    id="description"
                    placeholder="Exploring how AI will transform our everyday lives..."
                    className="textarea"
                    {...register("description", {
                      required: "Description is required",
                      validate: (value) => {
                        if (!value.trim()) return "Description is required";
                      },
                    })}
                  ></textarea>

                  {errors.description && (
                    <ErrorText label={errors.description.message} />
                  )}
                </div>

                <MyButton>Publish Blog</MyButton>
              </div>
            </form>
          </div>
        </MyContainer>
      </section>
    </ProtectedRoute>
  );
};

export default PostBlogPage;
