// src/pages/Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-page">
      {/* Fixed header that uses the first color of the gradient */}
      <header className="fixed-header">
        <nav className="social-nav">
          <a
            href="https://www.linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/linkedin-icon.png"
              alt="LinkedIn"
              className="social-icon"
            />
          </a>

          <a
            href="https://twitter.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/public/twitter-icon.png"
              alt="Twitter"
              className="social-icon"
            />
          </a>

          <a
            href="mailto:youremail@example.com"
          >
            <img
              src="/public/contact-icon.png"
              alt="Contact Me"
              className="social-icon"
            />
          </a>
        </nav>
      </header>

      {/* Main content */}
      <h1>Main Portfolio</h1>
      <p>Scroll to see the background and header in action.</p>
    </div>
  );
};

export default Home;
