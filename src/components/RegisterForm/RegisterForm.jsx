"use client";

import useAuthInfo from "@/hooks/useAuthInfo";
import useGoogleLogin from "@/hooks/useGoogleLogin";
import { getAuthErrorMessage } from "@/utilities/getAuthErrorMessage";
import { loginSuccessMessage } from "@/utilities/getLoginMessage";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import MyLabel from "../MyLabel/MyLabel";
import MyInput from "../MyInput/MyInput";
import ErrorText from "../ErrorText/ErrorText";
import MyButton from "../MyButton/MyButton";
import ActionSpinner from "../ActionSpinner/ActionSpinner";
import Link from "next/link";
import SocialLogin from "../SocialLogin/SocialLogin";

const RegisterForm = () => {
  const { createUser, updateUserProfile } = useAuthInfo();
  const { handleGoogleLogin, googleLoading } = useGoogleLogin();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleCreateUser = async (data) => {
    const { name: displayName, email, image, password } = data;
    setLoading(true);

    try {
      const photoURL = await getUploadImage(image[0]);
      const userCredentials = await createUser(email, password);
      await updateUserProfile({
        ...userCredentials.user,
        displayName,
        photoURL,
      });

      reset();
      router.push("/");
      loginSuccessMessage(userCredentials.user.displayName);
    } catch (err) {
      const errorMessage = getAuthErrorMessage(err.code);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
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
    <>
      <form onSubmit={handleSubmit(handleCreateUser)}>
        <fieldset className="fieldset gap-3.5 text-base">
          {/* User Name */}
          <div className="space-y-1.5">
            <MyLabel htmlFor="name" label="Name" />
            <MyInput
              id="name"
              disabled={loading || googleLoading}
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
              disabled={loading || googleLoading}
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
              disabled={loading || googleLoading}
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
              disabled={loading || googleLoading}
              placeholder="•••••••"
              {...register("password", {
                required: "Password is required",
                validate: validatePassword,
              })}
            />

            {errors.password && <ErrorText label={errors.password.message} />}
          </div>

          <MyButton
            disabled={loading || googleLoading}
            className="btn btn-neutral mt-4"
          >
            {loading ? <ActionSpinner /> : "Register"}
          </MyButton>

          <p className="text-center">
            Already have an account?{" "}
            <Link href="/login" className="link link-hover">
              Login Now
            </Link>
          </p>

          <SocialLogin
            disabled={loading || googleLoading}
            onClick={handleGoogleLogin}
          />
        </fieldset>
      </form>
    </>
  );
};

export default RegisterForm;
