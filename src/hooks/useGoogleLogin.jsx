import { useState } from "react";
import useAuthInfo from "./useAuthInfo";
import { getAuthErrorMessage } from "@/utilities/getAuthErrorMessage";
import { toast } from "sonner";

const useGoogleLogin = () => {
  const { loginUserWithGoogle } = useAuthInfo();
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      await loginUserWithGoogle();
    } catch (err) {
      const errorMessage = getAuthErrorMessage(err.code);
      toast.error(errorMessage);
      console.log(err);
    } finally {
      setGoogleLoading(false);
    }
  };

  return { handleGoogleLogin, googleLoading };
};

export default useGoogleLogin;
