import {
  FaCode,
  FaPalette,
  FaRocket,
  FaBook,
  FaGamepad,
  FaHeart,
} from "react-icons/fa";
import Heading from "../Heading/Heading";
import MyContainer from "../MyContainer/MyContainer";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Web Development",
      icon: <FaCode className="text-2xl" />,
      description: "Frontend, backend, and full-stack development",
      color: "primary",
      count: 24,
    },
    {
      id: 2,
      name: "UI/UX Design",
      icon: <FaPalette className="text-2xl" />,
      description: "User interface and experience design",
      color: "secondary",
      count: 18,
    },
    {
      id: 3,
      name: "Technology",
      icon: <FaRocket className="text-2xl" />,
      description: "Latest tech trends and innovations",
      color: "accent",
      count: 32,
    },
    {
      id: 4,
      name: "Tutorials",
      icon: <FaBook className="text-2xl" />,
      description: "Step-by-step guides and how-tos",
      color: "info",
      count: 45,
    },
    {
      id: 5,
      name: "Gaming",
      icon: <FaGamepad className="text-2xl" />,
      description: "Game reviews and development",
      color: "success",
      count: 15,
    },
    {
      id: 6,
      name: "Lifestyle",
      icon: <FaHeart className="text-2xl" />,
      description: "Personal development and daily life",
      color: "warning",
      count: 22,
    },
  ];

  const getColorClass = (color) => {
    const colorMap = {
      primary: "bg-primary text-primary-content",
      secondary: "bg-secondary text-secondary-content",
      accent: "bg-accent text-accent-content",
      info: "bg-info text-info-content",
      success: "bg-success text-success-content",
      warning: "bg-warning text-warning-content",
    };

    return colorMap[color] || "bg-base-200";
  };

  return (
    <section className="py-12 bg-base-100">
      <MyContainer className="space-y-10">
        <Heading
          title="Categories"
          subTitle="Explore our wide range of blog categories covering various topics
            from technology to lifestyle."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="card bg-accent/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-default group"
            >
              <div className="card-body">
                {/* Icon and Title */}
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg ${getColorClass(
                      category.color
                    )} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="card-title text-base-content group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                    <div className="badge badge-outline badge-sm">
                      {category.count} posts
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-base-content/70 text-sm mb-4">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default CategorySection;
