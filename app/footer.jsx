
import React from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2025 Ved Prakash Singh. All rights reserved.</p>
        <div className="footer-links">
          <Link href="https://github.com/vedsingh615" target="_blank" className="footer-icon">
            <FaGithub />
          </Link>
          <Link href="https://linkedin.com" target="_blank" className="footer-icon">
            <FaLinkedin />
          </Link>
          <Link href="mailto:vedsingh615@gmail.com" className="footer-icon">
            <FaEnvelope />
          </Link>
          <Link href="https://instagram.com/ved_0615" target="_blank" className="footer-icon">
            <FaInstagram />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
