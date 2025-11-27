import AuthorsSection from "@/components/AuthorsSection/AuthorsSection";
import Banner from "@/components/Banner/Banner";
import CategorySection from "@/components/CategorySection/CategorySection";
import NewsLetterSection from "@/components/NewsLetterSection/NewsLetterSection";

export default function Home() {
  return (
    <>
      <Banner />

      <CategorySection />

      <AuthorsSection />

      <NewsLetterSection />
    </>
  );
}
