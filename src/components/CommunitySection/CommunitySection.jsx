import { FaHeart, FaRocket, FaUsers } from "react-icons/fa";
import MyContainer from "../MyContainer/MyContainer";

const CommunitySection = () => {
  const values = [
    {
      title: "Quality Content",
      description:
        "We prioritize well-researched, engaging, and valuable content for our readers.",
      icon: <FaHeart className="text-2xl text-red-500" />,
    },
    {
      title: "Community First",
      description:
        "Our readers are at the heart of everything we do. We build this platform for you.",
      icon: <FaUsers className="text-2xl text-blue-500" />,
    },
    {
      title: "Innovation",
      description:
        "We continuously evolve to bring you the best reading experience across all devices.",
      icon: <FaRocket className="text-2xl text-purple-500" />,
    },
  ];

  return (
    <>
      <section className="py-6 md:py-10 bg-accent/20">
        <MyContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="card bg-base-100 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="mb-4">{value.icon}</div>
                <h3 className="card-title text-2xl mb-4">{value.title}</h3>
                <p className="text-base-content/70">{value.description}</p>
              </div>
            </div>
          ))}
        </MyContainer>
      </section>
    </>
  );
};

export default CommunitySection;
