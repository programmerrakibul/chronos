import { FaClock, FaUsers, FaRocket, FaHeart } from "react-icons/fa";

export const metadata = {
  title: "About Us | Chronos",
  description: "Learn more about Chronos - our mission, team, and values",
};

export default function About() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & Writer",
      bio: "Passionate about storytelling and technology. Loves to explore the intersection of time and human experience.",
    },
    {
      name: "Sarah Chen",
      role: "Editor",
      bio: "Detail-oriented editor with a keen eye for compelling narratives. Ensures every story meets our quality standards.",
      icon: <FaUsers className="text-2xl" />,
    },
    {
      name: "Mike Rodriguez",
      role: "Developer",
      bio: "Full-stack developer who built the Chronos platform. Believes in creating seamless digital experiences.",
      icon: <FaRocket className="text-2xl" />,
    },
  ];

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
      <section className="hero min-h-96 bg-gradient-to-br from-primary to-secondary text-primary-content">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary-content rounded-full">
                <FaClock className="text-6xl text-primary" />
              </div>
            </div>
            <h1 className="text-5xl font-bold">About Chronos</h1>
            <p className="py-6 text-xl">
              Where time meets storytelling. Chronos is dedicated to bringing
              you timeless content that inspires, educates, and entertains.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                At Chronos, we believe that great stories transcend time. Our
                mission is to create a platform where writers can share their
                perspectives and readers can discover content that resonates
                with their journey through time.
              </p>
              <p className="text-lg">
                Founded in 2024, Chronos has grown from a simple blog to a
                vibrant community of thinkers, writers, and readers who value
                meaningful content in a fast-paced world.
              </p>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="stats shadow bg-base-200">
                  <div className="stat">
                    <div className="stat-title">Articles Published</div>
                    <div className="stat-value text-primary">1,200+</div>
                  </div>
                </div>
                <div className="stats shadow bg-base-200">
                  <div className="stat">
                    <div className="stat-title">Active Readers</div>
                    <div className="stat-value text-secondary">50K+</div>
                  </div>
                </div>
                <div className="stats shadow bg-base-200">
                  <div className="stat">
                    <div className="stat-title">Team Members</div>
                    <div className="stat-value text-accent">12</div>
                  </div>
                </div>
                <div className="stats shadow bg-base-200">
                  <div className="stat">
                    <div className="stat-title">Years Running</div>
                    <div className="stat-value text-info">2+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-base-200 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="card-title text-2xl mb-4">{value.title}</h3>
                  <p className="text-base-content/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                  <div className="avatar placeholder mb-4">
                    <div className="bg-neutral text-neutral-content rounded-full w-24">
                      <span className="text-3xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
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
        </div>
      </section>
    </>
  );
}
