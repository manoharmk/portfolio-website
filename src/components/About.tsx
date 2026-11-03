import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-container">
        <div className="about-image-container">
          <img src="/images/profile.PNG" alt="Manohar Kendhuli" className="about-image" />
        </div>
        <div className="about-me">
          <h3 className="title">About Me</h3>
          <p className="para">
            I am a Software Engineer and Java Developer with 2 years of software development experience,
            including 1.5+ years of enterprise application development for State Bank of India (SBI) at Tata Consultancy Services (TCS), Mumbai. Having delivered 5 production-ready banking modules and contributed to 10+ production deployments, I specialize in building secure REST APIs integrated with Core Banking Systems (CBS), Spring Boot backends, responsive UI components, and optimized Oracle PL/SQL queries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
