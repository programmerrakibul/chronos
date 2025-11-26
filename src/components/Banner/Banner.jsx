"use client";

import { useRouter } from "next/navigation";
import MyButton from "../MyButton/MyButton";
import MyContainer from "../MyContainer/MyContainer";
import heroImg from "@/assets/hero_bg.jpg";

const Banner = () => {
  const router = useRouter();

  return (
    <>
      <section className="py-6 my-5">
        <MyContainer>
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={heroImg.src}
              alt="Banner Image"
              className="w-full h-[80dvh] object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#11111122] backdrop-blur-xs grid place-items-center p-4 md:p-7">
              <div className="text-center max-w-2xl w-full space-y-4">
                <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Write Your Story Into Existence
                </h1>
                <p className="text-base sm:text-lg md:text-xl">
                  This is more than a blog. It&apos;s the chronicle of your
                  journey. Capture your evolving thoughts, document your
                  passions, and build a legacy of words that stands the test of
                  time.
                </p>
                <MyButton onClick={() => router.push("/post-blog")}>
                  Begin Your Chronicle
                </MyButton>
              </div>
            </div>
          </div>
        </MyContainer>
      </section>
    </>
  );
};

export default Banner;
