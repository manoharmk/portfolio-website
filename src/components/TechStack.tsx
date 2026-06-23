import "./styles/TechStack.css";
import { FaJava, FaReact, FaJs, FaDatabase, FaLock, FaTerminal } from "react-icons/fa6";

const TechStack = () => {
  const categories = [
    {
      title: "Languages & Core",
      icon: <FaJs />,
      skills: ["Java", "JavaScript", "TypeScript", "C", "C++"],
    },
    {
      title: "Backend & Systems",
      icon: <FaTerminal />,
      skills: ["Spring Boot", "Spring MVC", "Hibernate", "JPA", "Node.js"],
    },
    {
      title: "Frontend & UI",
      icon: <FaReact />,
      skills: ["React.js", "HTML5", "CSS3", "Responsive UI"],
    },
    {
      title: "Databases & Storage",
      icon: <FaDatabase />,
      skills: ["PostgreSQL", "Oracle SQL", "MySQL", "PL/SQL"],
    },
    {
      title: "Security & Auth",
      icon: <FaLock />,
      skills: ["Spring Security", "JWT (JSON Web Tokens)", "OAuth 2.0"],
    },
    {
      title: "Developer Tools",
      icon: <FaJava />,
      skills: ["Postman", "Maven", "Git & GitHub", "Agile Methodologies"],
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
