import { useState } from "react";
import useAuthInfo from "./useAuthInfo";

const useGoogleLogin = () => {
  const { loginUserWithGoogle } = useAuthInfo();
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);

    try {
      await loginUserWithGoogle();
    } catch (err) {
      console.log(err);
    } finally {
      setGoogleLoading(false);
    }
  };

  return { handleGoogleLogin, googleLoading };
};

export default useGoogleLogin;
