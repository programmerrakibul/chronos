import { useContext } from "react";
import { AuthContext } from "@/contexts/Auth/AuthContext";

const useAuthInfo = () => {
  return useContext(AuthContext);
};

export default useAuthInfo;
