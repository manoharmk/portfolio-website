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
            I am a dedicated Full Stack Java Developer with 1.7 years of software development experience,
            including 1.5+ years of enterprise-level banking application development at Tata Consultancy Services (TCS) on State Bank of India's (SBI) Loan Origination System. Having received the SBI Employee of the Month award, I specialize in building secure REST APIs, Spring Boot backends, and modular React interfaces, along with database optimization to drive system performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
