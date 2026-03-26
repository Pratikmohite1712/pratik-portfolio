import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Achievements
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA (Master of Computer Application)</h4>
                <h5>Bhartiya Vidhyapeeth's IMIT</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Pursuing my Master's degree to deepen my knowledge in software engineering, scalable systems, and advanced AI technologies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BSC (Information Technology)</h4>
                <h5>Ramsheth Thakur College Of Commerce And Science</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Graduated with a CGPI of 9.38. Built a strong foundation in programming languages, database management, and web development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Awards &<br />Certifications</h4>
                <h5>Hackathons & Courses</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              🏆 Best Problem-Solving Award in UAI Hawkethon 2026.
              <br />
              🥈 Second prize in Mumbai University Youth Fest 2023.
              <br />
              Certifications include Data Science in Python & Data Science Capstone (Coursera), and JavaScript, Bootstrap, & PHP (Udemy).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
