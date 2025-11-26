import Banner from "@/components/Banner/Banner";
import MyContainer from "@/components/MyContainer/MyContainer";

export default function Home() {
  return (
    <>
      <Banner />
      <section className="py-16 bg-primary text-primary-content px-4">
        <MyContainer className="text-center">
          <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our growing community of readers and writers. Subscribe
            to never miss a story or contribute your own perspectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-secondary btn-lg">
              Subscribe to Newsletter
            </button>
            <button className="btn btn-accent btn-outline btn-lg">
              Start Writing
            </button>
          </div>
        </MyContainer>
      </section>
    </>
  );
}
