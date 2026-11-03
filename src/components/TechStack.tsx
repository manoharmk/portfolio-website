import "./styles/TechStack.css";
import { FaJava, FaReact, FaDatabase, FaLock, FaTerminal, FaGear } from "react-icons/fa6";

const TechStack = () => {
  const categories = [
    {
      title: "Languages & Core",
      icon: <FaJava />,
      skills: ["Java", "JavaScript", "SQL", "Core Java"],
    },
    {
      title: "Frameworks & Backend",
      icon: <FaTerminal />,
      skills: ["Spring Boot", "Spring MVC", "Hibernate", "REST APIs", "CBS Integration"],
    },
    {
      title: "Web Technologies & UI",
      icon: <FaReact />,
      skills: ["HTML5", "CSS3", "JavaScript", "UI Components", "Responsive Design"],
    },
    {
      title: "Databases & Tools",
      icon: <FaDatabase />,
      skills: ["Oracle SQL", "PL/SQL Developer", "Query Optimization", "PostgreSQL"],
    },
    {
      title: "Security & Architecture",
      icon: <FaLock />,
      skills: ["Spring Security", "JWT Authentication", "RESTful Architecture", "SDLC"],
    },
    {
      title: "Tools & Methodologies",
      icon: <FaGear />,
      skills: ["Postman", "Maven", "Agile", "Git & GitHub", "Release Validation"],
    },
  ];

  return (
    <div className="techstack-section section-container" id="techstack">
      <h2>My Techstack</h2>
      <div className="techstack-grid">
        {categories.map((category, index) => (
          <div className="tech-card" key={index}>
            <div className="tech-card-glow"></div>
            <div className="tech-card-header">
              <span className="tech-icon">{category.icon}</span>
              <h3>{category.title}</h3>
            </div>
            <div className="tech-skills-list">
              {category.skills.map((skill, sIndex) => (
                <span className="tech-badge" key={sIndex}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
