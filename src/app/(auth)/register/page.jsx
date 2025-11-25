"use client";

import ErrorText from "@/components/ErrorText/ErrorText";
import MyButton from "@/components/MyButton/MyButton";
import MyContainer from "@/components/MyContainer/MyContainer";
import MyInput from "@/components/MyInput/MyInput";
import MyLabel from "@/components/MyLabel/MyLabel";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleCreateUser = (data) => {
    const imageInfo = data.image[0]
    console.log(imageInfo);
  };

  const validatePassword = (value) => {
    const uppercase = /[A-Z]/;
    const lowercase = /[a-z]/;
    const number = /\d/;

    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }

    if (!uppercase.test(value)) {
      return "Password must contain at least one uppercase letter";
    }

    if (!lowercase.test(value)) {
      return "Password must contain at least one lowercase letter";
    }

    if (!number.test(value)) {
      return "Password must contain at least one number";
    }

    return true;
  };

  return (
    <section className="py-6 my-7">
      <MyContainer className="grid place-items-center min-h-[70dvh]">
        <div className="max-w-lg w-full">
          <form onSubmit={handleSubmit(handleCreateUser)}>
            <fieldset className="fieldset gap-3.5">
              {/* User Name */}
              <div className="space-y-1.5">
                <MyLabel htmlFor="name" label="Name" />
                <MyInput
                  id="name"
                  placeholder="E.g. John Doe"
                  {...register("name", {
                    required: "Name is required",
                    validate: (value) => {
                      if (!value) return "Name is required";
                    },
                  })}
                />

                {errors.name && <ErrorText label={errors.name.message} />}
              </div>

              {/* User Image */}
              <div className="space-y-1.5">
                <MyLabel htmlFor="image" label="Upload Image" />
                <input
                  id="image"
                  type="file"
                  className="file-input block w-full"
                  {...register("image", {
                    required: "Image is required",
                  })}
                />

                {errors.image && <ErrorText label={errors.image.message} />}
              </div>

              {/* User Email */}
              <div className="space-y-1.5">
                <MyLabel htmlFor="email" label="Email" />
                <MyInput
                  id="email"
                  type="email"
                  placeholder="E.g. example@gmail.com"
                  {...register("email", {
                    required: "Email is required",
                  })}
                />

                {errors.email && <ErrorText label={errors.email.message} />}
              </div>

              <div className="space-y-1.5">
                <MyLabel htmlFor="password" label="Password" />
                <MyInput
                  id="password"
                  type="password"
                  placeholder="•••••••"
                  {...register("password", {
                    required: "Password is required",
                    validate: validatePassword,
                  })}
                />

                {errors.password && (
                  <ErrorText label={errors.password.message} />
                )}
              </div>

              <MyButton className="btn btn-neutral mt-4">Register</MyButton>
            </fieldset>
          </form>
        </div>
      </MyContainer>
    </section>
  );
};

export default RegisterPage;
