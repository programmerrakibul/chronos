import MyButton from "../MyButton/MyButton";
import MyContainer from "../MyContainer/MyContainer";
import heroImg from "@/assets/hero_bg.jpg";

const Banner = () => {
  return (
    <>
      <section>
        <MyContainer>
          <div className="relative">
            <img
              src={heroImg.src}
              alt="Banner Image"
              className="w-full h-[80dvh] object-cover"
            />

            <div className="absolute top-0 left-0 w-full h-full bg-[#11111122] backdrop-blur-xs grid place-items-center p-7">
              <div className="text-center max-w-2xl w-full space-y-3.5">
                <h1 className="font-extrabold text-6xl">
                  Write Your Story Into Existence
                </h1>
                <p className="text-lg">
                  This is more than a blog; it&apos;s the chronicle of your
                  journey. Capture your evolving thoughts, document your
                  passions, and build a legacy of words that stands the test of
                  time. Let your future self look back on a life fully narrated
                </p>
                <MyButton>Begin Your Chronicle</MyButton>
              </div>
            </div>
          </div>
        </MyContainer>
      </section>
    </>
  );
};

export default Banner;
