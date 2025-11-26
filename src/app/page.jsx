import Banner from "@/components/Banner/Banner";
import Heading from "@/components/Heading/Heading";
import MyButton from "@/components/MyButton/MyButton";
import MyContainer from "@/components/MyContainer/MyContainer";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="py-16 bg-primary/10 px-4">
        <MyContainer className="text-center space-y-10">
          <Heading
            title="Join Our Community"
            subTitle="Be part of our growing community of readers and writers. Subscribe to
          never miss a story or contribute your own perspectives."
          />

          <div className="flex items-center gap-4 justify-center">
            <MyButton>Subscribe to Newsletter</MyButton>

            <MyButton outline={true}>Start Writing</MyButton>
          </div>
        </MyContainer>
      </section>
    </>
  );
}
