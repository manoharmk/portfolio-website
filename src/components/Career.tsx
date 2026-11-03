import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Self-Developed Projects</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Architected and built EcommerceHub, a multi-role e-commerce platform using Spring Boot and React. Implemented PostgreSQL database schemas, JPA/Hibernate mappings, and deployed the system on AWS with production configurations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Tata Consultancy Services (TCS), Mumbai</h5>
              </div>
              <h3>Sep 2024 - Jan 2026</h3>
            </div>
            <p>
              Client: State Bank of India (SBI) – Loan Origination System (LOS). Built and delivered 5 production-ready banking modules using Java, Spring Boot, Spring MVC, Oracle PL/SQL, HTML/CSS and JavaScript. Contributed to 10+ enterprise modules and production deployments, including release validation, monitoring, issue resolution, and post-deployment verification. Designed secure REST APIs integrated with Core Banking Systems (CBS), implemented Spring Security & JWT authentication, optimized Oracle PL/SQL queries, and built 25+ UI components in Agile environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Gustovalley Technovations</h5>
              </div>
              <h3>Sep 2023 - Feb 2024</h3>
            </div>
            <p>
              Worked on Python, SQL, Excel, and data analysis fundamentals through structured industry training. Performed hands-on coding exercises to strengthen database querying and analytical problem-solving skills, gaining practical exposure to data preprocessing, exploratory data analysis (EDA), and software development workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Science & Engineering</h4>
                <h5>Basaveshwar Engg College, Bagalkot</h5>
              </div>
              <h3>2020 - 2024</h3>
            </div>
            <p>
              Completed Bachelor of Engineering in Computer Science and Engineering at Basaveshwar Engineering College (Bagalkot, Karnataka). Built a strong foundation in Java, database management, software design, and object-oriented systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
