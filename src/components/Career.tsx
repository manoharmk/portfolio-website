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
                <h4>Full Stack Developer</h4>
                <h5>Tata Consultancy Services</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Worked on State Bank of India's Loan Origination System (LOS). Developed 10+ core modules using Java, Spring Boot, Spring MVC, and Oracle PL/SQL. Designed secure REST APIs and implemented JWT-based authentication.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in Computer Science</h4>
                <h5>Basaveshwar Engg. College</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Completed Bachelor of Engineering in Computer Science and Engineering at Basaveshwar Engineering College (Bagalkot, Karnataka). Built a strong foundation in Java, database management, and object-oriented systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
