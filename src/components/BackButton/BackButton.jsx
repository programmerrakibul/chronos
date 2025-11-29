"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.back()}
        className="btn btn-ghost btn-sm md:btn-md gap-2 px-4 hover:bg-base-200 transition-all duration-200"
      >
        <FaArrowLeft className="text-sm" />
        <span className="text-sm md:text-base">Go Back</span>
      </button>
    </>
  );
};

export default BackButton;
