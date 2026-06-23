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
            I am a dedicated Full Stack Java Developer with over 1.5 years of experience
            designing and implementing enterprise-level banking applications. Having worked
            at Tata Consultancy Services (TCS) on State Bank of India's Loan Origination System,
            I specialize in building secure REST APIs, Spring Boot backends, and modular React interfaces,
            along with database optimization to drive system performance and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
