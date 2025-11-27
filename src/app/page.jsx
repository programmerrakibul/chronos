import AuthorsSection from "@/components/AuthorsSection/AuthorsSection";
import Banner from "@/components/Banner/Banner";
import CategorySection from "@/components/CategorySection/CategorySection";
import CommunitySection from "@/components/CommunitySection/CommunitySection";
import NewsLetterSection from "@/components/NewsLetterSection/NewsLetterSection";

export const metadata = {
  title: "Home - CHRONOS",
  description: "Welcome to CHRONOS",
};

export default function Home() {
  return (
    <>
      <Banner />

      <CategorySection />

      <AuthorsSection />

      <CommunitySection />

      <NewsLetterSection />
    </>
  );
}
