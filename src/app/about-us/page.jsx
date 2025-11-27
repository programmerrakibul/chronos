import Heading from "@/components/Heading/Heading";
import MyContainer from "@/components/MyContainer/MyContainer";
import { FaUsers, FaPenNib } from "react-icons/fa";
import { RiCodeSSlashLine } from "react-icons/ri";

export const metadata = {
  title: "About Us | CHRONOS",
  description: "Learn more about CHRONOS - our mission, team, and values",
};

export default function About() {
  const statsData = [
    {
      className: "stats shadow bg-base-200",
      stat: {
        title: "Articles Published",
        value: "1,200+",
        valueClass: "text-primary",
      },
    },
    {
      className: "stats shadow bg-base-200",
      stat: {
        title: "Active Readers",
        value: "50K+",
        valueClass: "text-secondary",
      },
    },
    {
      className: "stats shadow bg-base-200",
      stat: {
        title: "Team Members",
        value: "12",
        valueClass: "text-accent",
      },
    },
    {
      className: "stats shadow bg-base-200",
      stat: {
        title: "Years Running",
        value: "2+",
        valueClass: "text-info",
      },
    },
  ];

  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Writer",
      bio: "Passionate about storytelling and technology. Loves to explore the intersection of time and human experience.",
      icon: <FaPenNib className="text-2xl" />,
      imageURL:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sarah Chen",
      role: "Editor",
      bio: "Detail-oriented editor with a keen eye for compelling narratives. Ensures every story meets our quality standards.",
      icon: <FaUsers className="text-2xl" />,
      imageURL:
        "https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Mike Rodriguez",
      role: "Developer",
      bio: "Full-stack developer who built the Chronos platform. Believes in creating seamless digital experiences.",
      icon: <RiCodeSSlashLine className="text-2xl" />,
      imageURL:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <>
      <section className="py-6 md:py-10">
        <MyContainer className="space-y-10">
          <Heading
            title="About CHRONOS"
            subTitle="Where time meets storytelling. Chronos is dedicated to bringing
                you timeless content that inspires, educates, and entertains."
          />

          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-start space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Our Mission
              </h3>
              <p className="text-base md:text-lg">
                At Chronos, we believe that great stories transcend time. Our
                mission is to create a platform where writers can share their
                perspectives and readers can discover content that resonates
                with their journey through time.
              </p>
              <p className="text-base md:text-lg">
                Founded in 2024, Chronos has grown from a simple blog to a
                vibrant community of thinkers, writers, and readers who value
                meaningful content in a fast-paced world.
              </p>
            </div>

            <div className="flex-1 w-full lg:w-auto">
              <div className="grid sm:grid-cols-2 gap-4">
                {statsData.map((item, index) => (
                  <div key={index} className={item.className}>
                    <div className="stat">
                      <div className="stat-title">{item.stat.title}</div>
                      <div className={`stat-value ${item.stat.valueClass}`}>
                        {item.stat.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MyContainer>
      </section>

      <section className="py-6 md:py-10">
        <MyContainer className="space-y-7">
          <Heading
            title="Meet Our Team"
            subTitle="Crafting timeless stories with a passionate team dedicated to innovation, quality, and meaningful digital experiences that connect readers across moments and memories."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="card bg-secondary/30 shadow-xl rounded-tl-full"
              >
                <div className="card-body items-center text-center">
                  <div className="avatar placeholder mb-4">
                    <div className="rounded-full size-24 ring-2 ring-primary ring-offset-4 ring-offset-base-200">
                      <img src={member.imageURL} alt={member.name} />
                    </div>
                  </div>
                  <div className="mb-4">{member.icon}</div>
                  <h3 className="card-title text-2xl">{member.name}</h3>
                  <div className="badge badge-primary badge-lg mb-4">
                    {member.role}
                  </div>
                  <p className="text-base-content/70">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </MyContainer>
      </section>
    </>
  );
}
