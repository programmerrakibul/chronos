"use client";

import ErrorText from "@/components/ErrorText/ErrorText";
import Heading from "@/components/Heading/Heading";
import MyButton from "@/components/MyButton/MyButton";
import MyContainer from "@/components/MyContainer/MyContainer";
import MyInput from "@/components/MyInput/MyInput";
import MyLabel from "@/components/MyLabel/MyLabel";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import useAuthInfo from "@/hooks/useAuthInfo";
import useGoogleLogin from "@/hooks/useGoogleLogin";
import { getAuthErrorMessage } from "@/utilities/getAuthErrorMessage";
import { loginSuccessMessage } from "@/utilities/getLoginMessage";
import { getUploadImage } from "@/utilities/getUploadImage";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const RegisterPage = () => {
  const { createUser, updateUserProfile } = useAuthInfo();
  const { handleGoogleLogin } = useGoogleLogin();
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const handleCreateUser = async (data) => {
    const { name: displayName, email, image, password } = data;

    try {
      const photoURL = await getUploadImage(image[0]);
      const userCredentials = await createUser(email, password);
      await updateUserProfile({
        ...userCredentials.user,
        displayName,
        photoURL,
      });

      router.push("/");
      loginSuccessMessage(userCredentials.user.displayName);
    } catch (err) {
      const errorMessage = getAuthErrorMessage(err.code);
      toast.error(errorMessage);
    }
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
      <MyContainer className="grid place-items-center min-h-[70dvh] space-y-7">
        <Heading title="Register Now" />
        <div className="max-w-lg w-full bg-primary/10 shadow-xl rounded-xl p-6">
          <form onSubmit={handleSubmit(handleCreateUser)}>
            <fieldset className="fieldset gap-3.5 text-base">
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

              <p className="text-center">
                Already have an account?{" "}
                <Link href="/login" className="link link-hover">
                  Login Now
                </Link>
              </p>

              <SocialLogin onClick={handleGoogleLogin} />
            </fieldset>
          </form>
        </div>
      </MyContainer>
    </section>
  );
};

export default RegisterPage;
