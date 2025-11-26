'use client'

import useAuthInfo from "@/hooks/useAuthInfo";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuthInfo();
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
