import React from 'react';
import { FiExternalLink } from 'react-icons/fi';

export const metadata = {
  title: "About | Portfolio", 
};
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I'm a self-motivated web developer with a strong focus on creating elegant, high-performing websites and web apps.
          My journey in web development began with curiosity and turned into a passion for clean code, responsive design,
          and solving real-world problems through technology. I enjoy working with both frontend and backend technologies,
          always aiming to learn more and build better. Whether it’s a portfolio, e-commerce site, or custom app, I approach
          every project with creativity and precision.
        </p>
        <a
  href="/Ved_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="download-btn"
  aria-label="View Resume"
>
  View Resume <FiExternalLink style={{ marginLeft: '8px' }} />
</a>

      </div>
    </section>
  );
};

export default About;
