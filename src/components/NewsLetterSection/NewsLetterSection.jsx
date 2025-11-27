"use client";

import { useRouter } from "next/navigation";
import Heading from "../Heading/Heading";
import MyButton from "../MyButton/MyButton";
import MyContainer from "../MyContainer/MyContainer";

const NewsLetterSection = () => {
  const router = useRouter();
  
  return (
    <>
      <section className="py-16 bg-primary/10 px-4">
        <MyContainer className="text-center space-y-10">
          <Heading
            title="Join Our Community"
            subTitle="Be part of our growing community of readers and writers. Subscribe to
          never miss a story or contribute your own perspectives."
          />

          <div className="flex items-center gap-4 justify-center">
            <MyButton>Subscribe to Newsletter</MyButton>

            <MyButton onClick={() => router.push("/post-blog")} outline={true}>
              Start Writing
            </MyButton>
          </div>
        </MyContainer>
      </section>
    </>
  );
};

export default NewsLetterSection;
