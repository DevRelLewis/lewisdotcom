// src/pages/Home.tsx
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-page">
      {/* Fixed header with navigation */}
      <header className="fixed-header">
        <nav className="social-nav">
          <a
            href="https://www.linkedin.com/in/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            LinkedIn
          </a>

          <a
            href="https://twitter.com/YourProfile"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Twitter
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('resume');
            }}
            className="nav-link"
          >
            Resume
          </a>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="nav-link"
          >
            Projects
          </a>

          <a
            href="mailto:youremail@example.com"
            className="nav-link"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Centered Profile Section */}
      <div className="profile-section">
        <img
          className="profile-image"
          src="/lewis_8bit.png"
          alt="Lewis Meyers"
        />
        <h2 className="profile-name">Lewis Meyers</h2>
        <p className="mt-4 text-white text-lg max-w-lg">
          Full-stack developer specializing in modern web technologies
        </p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="py-16 px-4">
        <h1 className="text-4xl mb-12">My Projects</h1>
        
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Project Card 1 */}
          <div className="w-full md:w-80 bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg border-2 border-white border-opacity-20 backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-48 bg-purple-800 flex items-center justify-center">
              <span className="text-4xl">🎮</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">Project One</h3>
              <p className="text-white text-opacity-80 mb-4">
                A retro-inspired game built with React and TypeScript. Features pixel art and chiptune music.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">React</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">TypeScript</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Pixel Art</span>
              </div>
              <a href="#" className="inline-block px-4 py-2 border-2 border-white rounded hover:bg-white hover:bg-opacity-20 transition-colors">
                View Project
              </a>
            </div>
          </div>
          
          {/* Project Card 2 */}
          <div className="w-full md:w-80 bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg border-2 border-white border-opacity-20 backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-48 bg-purple-800 flex items-center justify-center">
              <span className="text-4xl">📱</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">Project Two</h3>
              <p className="text-white text-opacity-80 mb-4">
                A mobile app developed with React Native that helps users track their daily habits.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">React Native</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Redux</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Firebase</span>
              </div>
              <a href="#" className="inline-block px-4 py-2 border-2 border-white rounded hover:bg-white hover:bg-opacity-20 transition-colors">
                View Project
              </a>
            </div>
          </div>
          
          {/* Project Card 3 */}
          <div className="w-full md:w-80 bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg border-2 border-white border-opacity-20 backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-48 bg-purple-800 flex items-center justify-center">
              <span className="text-4xl">🤖</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">Project Three</h3>
              <p className="text-white text-opacity-80 mb-4">
                An AI-powered tool that analyzes code and suggests improvements. Built with Node.js and TensorFlow.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Node.js</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">TensorFlow</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Express</span>
              </div>
              <a href="#" className="inline-block px-4 py-2 border-2 border-white rounded hover:bg-white hover:bg-opacity-20 transition-colors">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Resume Section Placeholder */}
      <div id="resume" className="py-16 px-4">
        <h1 className="text-4xl mb-6">Resume</h1>
        <div className="max-w-3xl mx-auto bg-white bg-opacity-10 p-8 rounded-lg border-2 border-white border-opacity-20">
          <p className="mb-4">Resume content will go here...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;