import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './Home.css';

const Home: React.FC = () => {
  const [floatingIcons, setFloatingIcons] = useState<{ top: string; left: string; size: string; color: string }[]>([]);
  useEffect(() => {
    const iconPositions = [
      // Top row
      { top: '25%', left: '38%', size: '50px', color: 'rgba(186, 85, 211, 0.8)' },
      { top: '25%', left: '62%', size: '55px', color: 'rgba(138, 43, 226, 0.8)' },
      
      // Top sides
      { top: '30%', left: '20%', size: '48px', color: 'rgba(75, 0, 130, 0.8)' },
      { top: '30%', left: '80%', size: '52px', color: 'rgba(186, 85, 211, 0.8)' },
      
      // Middle sides
      { top: '50%', left: '15%', size: '56px', color: 'rgba(138, 43, 226, 0.8)' },
      { top: '50%', left: '85%', size: '50px', color: 'rgba(186, 85, 211, 0.8)' },
      
      // Bottom sides
      { top: '70%', left: '20%', size: '54px', color: 'rgba(75, 0, 130, 0.8)' },
      { top: '70%', left: '80%', size: '52px', color: 'rgba(138, 43, 226, 0.8)' },
      
      // Bottom row
      { top: '75%', left: '38%', size: '48px', color: 'rgba(186, 85, 211, 0.8)' },
      { top: '75%', left: '62%', size: '53px', color: 'rgba(75, 0, 130, 0.8)' },
      
      // Extra accents (more distant)
      { top: '20%', left: '28%', size: '45px', color: 'rgba(138, 43, 226, 0.7)' },
      { top: '20%', left: '72%', size: '47px', color: 'rgba(186, 85, 211, 0.7)' },
      { top: '80%', left: '28%', size: '46px', color: 'rgba(75, 0, 130, 0.7)' }
    ];
    
    setFloatingIcons(iconPositions);
  }, []);

    const localPaths = [
      '/docker.png',
      '/git.png',
      '/github.png',
      '/jira.png',
      '/vscode.png',
      '/js.png',
      '/nextjs-64.png',
      '/bootstrap.png',
      '/tailwindcss.png',
      '/html.png',
      '/css.png',
      '/mantine.png',
      '/typescript.png',
      '/postgres.png',
      'sql.png'
    ];

  const [currentSection, setCurrentSection] = useState(-1);
  const resumeContentRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 70);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const handleOnType = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === 'resume') {
        const rect = element.getBoundingClientRect();
        const absoluteElementTop = rect.top + window.pageYOffset;
        const middle = absoluteElementTop - window.innerHeight / 2 + rect.height / 2;
        window.scrollTo({ top: middle, behavior: 'smooth' });
      } else {
        const offset = 150;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={`home-page page-fade-in ${!isLoading ? 'page-visible' : ''}`}>
      <header className="fixed-header">
        <nav className="social-nav">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            rel="noopener noreferrer"
            className="nav-link"
          >
            Home
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}
            className="nav-link"
          >
            Resume
          </a>
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}
            className="nav-link"
          >
            Projects
          </a>

          <a
            href="https://www.linkedin.com/in/lewiscmeyers/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            LinkedIn
          </a>

          <a href="mailto:meyerslewis193@gmail.com" className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      <div id="home" className="profile-section">
        <div className="floating-icons-container">
        {floatingIcons.map((icon, index) => {
            const iconSrc = localPaths[index % localPaths.length];
            return (
              <div 
                key={index} 
                className="floating-icon" 
                style={{ 
                  top: icon.top, 
                  left: icon.left,
                  width: icon.size,
                  height: icon.size,
                  backgroundColor: icon.color,
                  animation: `pulse ${10 + (index % 8) * 9}s infinite alternate`
                }}
              >
                <img
                  src={iconSrc}
                  alt="Icon"
                  style={{ width: "80%", height: "80%" }}
                />
              </div>
            );
          })}
        </div>

        <img className="profile-image" src="/lewis_8bit.png" alt="Lewis Meyers" />
        <h2 className="profile-name">Lewis Meyers</h2>
        <p className="mt-4 text-white text-lg max-w-lg">
          Frontend Developer
        </p>
      </div>

      {/* Projects Section */}
      <div id="projects" className="projects">
        <h1 className="text-4xl mb-12">My Projects</h1>
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
          {/* Project Card 1 - Dream Net */}
          <div className="w-full md:w-80 bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg border-2 border-white border-opacity-20 backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-48 bg-purple-800 flex items-center justify-center">
              <span className="text-4xl">🌙</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">Dream Net AI</h3>
              <p className="text-white text-opacity-80 mb-4">
                AI dream interpreter using Next.js and ChatGPT, trained on specialized dream data with 25% improved accuracy.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Next.js</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">ChatGPT</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Supabase</span>
              </div>
              <a href="#" className="inline-block px-4 py-2 border-2 border-white rounded hover:bg-white hover:bg-opacity-20 transition-colors">
                View Project
              </a>
            </div>
          </div>
          
          {/* Project Card 2 - Trading Bot */}
          <div className="w-full md:w-80 bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg border-2 border-white border-opacity-20 backdrop-blur-sm transition-transform duration-300 hover:transform hover:scale-105">
            <div className="h-48 bg-purple-800 flex items-center justify-center">
              <span className="text-4xl">📈</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl mb-2">Options Trading Bot</h3>
              <p className="text-white text-opacity-80 mb-4">
                Python trading bot using Alpaca API and OpenAI, delivering 15% ROI in $100,000 paper money tests.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Python</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Alpaca API</span>
                <span className="px-2 py-1 bg-purple-700 rounded-full text-xs">Streamlit</span>
              </div>
              <a href="#" className="inline-block px-4 py-2 border-2 border-white rounded hover:bg-white hover:bg-opacity-20 transition-colors">
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <h1 className="resume-title text-4xl mb-6">Resume</h1>

      {/* Resume Section */}
      <div id="resume" className="resume" ref={resumeContentRef}>
        <div className="max-w-3xl mx-auto bg-white bg-opacity-90 p-8 rounded-lg border-2 border-white border-opacity-20">
          {/* Static Resume Header and Tools */}
          <div className="resume-header text-left text-black mb-6">
            <h1 className="text-3xl font-bold mb-2">Lewis Meyers</h1>
            <p className="mb-4 text-xs">
              <a href="mailto:meyerslewis193@gmail.com" className="text-blue-700 hover:underline">
                meyerslewis193@gmail.com
              </a>{" "}
              |{" "}
              <a href="https://www.linkedin.com/in/lewiscmeyers/" className="text-blue-700 hover:underline" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>{" "}
              | 571-294-9222
            </p>
            <h2 className="text-2xl font-bold mt-6 mb-3 border-b-2 border-gray-300 pb-1">TOOLS</h2>
            <p className="ml-5 mb-2">➔ Git, Github, Docker, Jira, Visual Studio Code</p>
            <p className="ml-5 mb-2">➔ JavaScript-TypeScript, Next.js, Bootstrap, HTML5/CSS3, TailwindCSS, MantineCSS</p>
            <p className="ml-5 mb-2">➔ SQL, Postgres</p>
          </div>

          {/* Experience Section */}
          <div className="resume-full-content text-left text-black">
            {currentSection >= 0 && (
              <>
                <Typewriter
                  words={["EXPERIENCE"]}
                  typeSpeed={15}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  cursor={false}
                  onType={handleOnType}
                />

                {/* Block 1: First Experience */}
                {currentSection >= 0 && (
                  <div className="transition-all duration-500">
                    <Typewriter
                      words={["AI Frontend/Tier 3 Engineer"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    <div>
                    <Typewriter
                      words={["Teachstone, Virginia, June 2023 – Present"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    </div>
                    
                    <ul className="list-disc ml-5 mb-3">
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Designed and refined Figma and React/TypeScript UIs, improving reporting tool accessibility and UX, boosting company-wide adoption by 40%."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Resolved 10-15 monthly Salesforce tickets and automated Java/SQL workflows, cutting turnaround time by 30% and enhancing AI tool efficiency by 25%."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Upgraded reporting dashboards with real-time analytics, increasing user engagement by 20% and supporting data-driven decisions."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                    </ul>
                  </div>
                )}

                {/* Second Experience */}
                {currentSection >= 1 && (
                  <div className="transition-all duration-500">
                    <Typewriter
                      words={["AI Platform Engineer"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    <div>
                    <Typewriter
                      words={["Hyperlink, SF Bay Area, Jan 2024 – May 2024"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    </div>
                    
                    <ul className="list-disc ml-5 mb-3">
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Raised $3.2M at SXSW 2024 through an SVP pitch, delivering the AI speech generator MVP on time with 50+ users engaging over 5 minutes each."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Built TypeScript components and optimized Next.js APIs, boosting platform stability by 30% and speeding up 100+ daily queries."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Partnered with product teams to refine UX, growing user retention by 15% and solidifying Hyperlink's SXSW impact."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                    </ul>
                  </div>
                )}

                {/* Third Experience */}
                {currentSection >= 2 && (
                  <div className="transition-all duration-500">
                    <Typewriter
                      words={["Intern Full Stack Developer"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    <div>
                    <Typewriter
                      words={["Dank Coders, SF Bay Area, Feb 2023 – Feb 2024"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    </div>
                    
                    <ul className="list-disc ml-5 mb-3">
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Designed a 3D ecommerce site with Three.js and Figma UI/UX, growing smoothie shop orders from 5-10 daily (Feb 2024) to 15-20 (Feb 2025)."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Integrated Node.js for optimized navigation and email APIs, cutting response times by 50% and doubling order volume in 12 months."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Collaborated with the client to refine features, increasing customer satisfaction by 25% and securing repeat orders."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                    </ul>
                  </div>
                )}

                {/* Fourth Experience */}
                {currentSection >= 3 && (
                  <div className="transition-all duration-500">
                    <Typewriter
                      words={["Infantryman/Tanker"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    <div>
                    <Typewriter
                      words={["Army National Guard, Leesburg, VA, Dec 2015 – Dec 2021"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    </div>
                    <ul className="list-disc ml-5 mb-3">
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Patrolled entry points and monitored $45M+ in surveillance equipment, weaponry and 200+ vehicles daily to secure 30+ personnel and 200+ visitors across a 12+ hour shift."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Key personnel in M1 Abrams Tank operations in Kuwait, managing target detection, gun control, and maintenance with a 4 person team while conducting 40+ member drills and maneuvers."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Led logistics training for 10+ troops, reducing equipment downtime by 15% and ensuring mission readiness during deployments."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                    </ul>
                  </div>
                )}

                {/* PROJECTS title */}
                {currentSection >= 4 && (
                  <Typewriter
                    words={["PROJECTS"]}
                    typeSpeed={15}
                    deleteSpeed={50}
                    delaySpeed={1000}
                    cursor
                    onType={handleOnType}
                  />
                )}

                {/* First Project */}
                {currentSection >= 5 && (
                  <div className="transition-all duration-500">
                    <Typewriter
                      words={["Dream Net AI Dream Interpreter"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    <ul className="list-disc ml-5 mb-3">
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Built an AI dream interpreter using Next.js and ChatGPT (trained on specialized dream data), improving interpretation accuracy by 25% during a 30-tester beta."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Implemented Supabase for user authentication and backend services, ensuring real-time data management and secure access."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                    </ul>
                  </div>
                )}

                {/* Second Project */}
                {currentSection >= 6 && (
                  <div className="transition-all duration-500">
                    <Typewriter
                      words={["Automated Options Trading Bot"]}
                      typeSpeed={15}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      cursor={false}
                      onType={handleOnType}
                    />
                    <ul className="list-disc ml-5 mb-3">
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Coded a Python bot with Alpaca API and OpenAI, delivering 15% ROI in $100,000 paper money tests."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                      <li className="ml-5 mb-2">
                        <Typewriter
                          words={[
                            "Designed a Streamlit dashboard with advanced strategies for real-time trade monitoring and execution."
                          ]}
                          typeSpeed={15}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          cursor={false}
                          onType={handleOnType}
                        />
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Continue Button */}
          <div className="mt-8 flex justify-center">
            <button 
              onClick={() => setCurrentSection(prev => prev < 7 ? prev + 1 : 0)}
              className="px-6 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-600 transition-colors cursor-pointer button-pressstartfont"
            >
              {currentSection === 6 ? "Start Over" : "Continue →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};


const formatResumeMarkdown = (markdown: string) => {
  if (!markdown) return null;
  
  let html = markdown
    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-6 mb-3 border-b-2 border-gray-300 pb-1">$1</h2>')
    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-4 mb-1">$1</h3>')
    .replace(/^([^-#\n].*?), (.*?)$/gm, '<p class="mb-2">$1, $2</p>')
    .replace(/^- (.*$)/gm, '<li class="ml-5 mb-2">$1</li>')
    .replace(/\n/g, '<br />');
  
  html = html.replace(/<\/li><br \/><li/g, '</li><li');
  
  let addedUl = false;
  let newHtml = '';
  const lines = html.split('<br />');
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<li')) {
      if (!addedUl) {
        newHtml += '<ul class="list-disc ml-5 mb-3">';
        addedUl = true;
      }
      newHtml += lines[i];
    } else {
      if (addedUl) {
        newHtml += '</ul>';
        addedUl = false;
      }
      newHtml += lines[i] + (i < lines.length - 1 ? '<br />' : '');
    }
  }
  
  if (addedUl) {
    newHtml += '</ul>';
  }
  
  return <div dangerouslySetInnerHTML={{ __html: newHtml }} />;
};

export default Home;
