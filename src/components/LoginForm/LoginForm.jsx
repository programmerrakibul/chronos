"use client";

import Link from "next/link";
import ActionSpinner from "../ActionSpinner/ActionSpinner";
import ErrorText from "../ErrorText/ErrorText";
import MyButton from "../MyButton/MyButton";
import MyInput from "../MyInput/MyInput";
import MyLabel from "../MyLabel/MyLabel";
import SocialLogin from "../SocialLogin/SocialLogin";
import useGoogleLogin from "@/hooks/useGoogleLogin";
import useAuthInfo from "@/hooks/useAuthInfo";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { handleGoogleLogin, googleLoading } = useGoogleLogin();
  const { loginUser } = useAuthInfo();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleUserLogin = async (data) => {
    setLoading(true);

    try {
      const userCreds = await loginUser(data.email, data.password);

      reset();
      router.push("/");
      loginSuccessMessage(userCreds.user.displayName);
    } catch (err) {
      const errorMessage = getAuthErrorMessage(err.code);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleUserLogin)}>
        <fieldset className="fieldset gap-3.5 text-base">
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
              })}
            />

            {errors.password && <ErrorText label={errors.password.message} />}
          </div>

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>

          <MyButton
            disabled={loading || googleLoading}
            className="btn btn-neutral mt-4"
          >
            {loading ? <ActionSpinner /> : "Login"}
          </MyButton>

          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="link link-hover">
              Register Now
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

export default LoginForm;
