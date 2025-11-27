import { useState } from "react";
import useAuthInfo from "./useAuthInfo";
import { getAuthErrorMessage } from "@/utilities/getAuthErrorMessage";
import { toast } from "sonner";
import { loginSuccessMessage } from "@/utilities/getLoginMessage";
import { useRouter } from "next/navigation";

const useGoogleLogin = () => {
  const { loginUserWithGoogle } = useAuthInfo();
  const [googleLoading, setGoogleLoading] = useState(false);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      const userCreds = await loginUserWithGoogle();

      router.push("/");
      loginSuccessMessage(userCreds.user.displayName);
    } catch (err) {
      const errorMessage = getAuthErrorMessage(err.code);
      toast.error(errorMessage);
    } finally {
      setGoogleLoading(false);
    }
  };

  return { handleGoogleLogin, googleLoading };
};

export default useGoogleLogin;
