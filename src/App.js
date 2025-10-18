import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import posts from "./posts";
import teamMembers from "./teamData";
import PostCard from "./components/PostCard";
import PostPage from "./components/PostPage";
import TeamMember from "./components/TeamMember";
import Gallery from "./components/Gallery"; 

import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSmileyClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">
            <img 
              src={process.env.PUBLIC_URL + "/Neutral Name Logo.svg"} 
              alt="Solace Logo" 
              className="logo-svg"
            />
          </div>
          <nav className="main-nav">
          <a 
              href="#about" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('.about');
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - 200;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }}
            >
              About
            </a>

            <a 
  href="#blog" 
  className="nav-link"
  onClick={(e) => {
    e.preventDefault();
    const element = document.querySelector('.post-list');
    if (element) {
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - 200;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
  
      window.location.href = "/";
      setTimeout(() => {
        const element = document.querySelector('.post-list');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  }}
>
  Blog
</a>

            <a 
              href="#team" 
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector('.team');
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - 200;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
              }}
            >
              Team
            </a>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="hero-image">
          <img 
            src={process.env.PUBLIC_URL + (isMobile ? "/SolaceHero_Mobile.png" : "/SolaceHero_Blank.png")} 
            alt="Team Solace Hero" 
          />
        </div>
        <div className="hero-content">
          <svg className="hero-logo" viewBox="0 0 444.54 108" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <style>
                {`.cls-1 { fill: #f6f6f6; }
                .smiley-face { fill: #f6f6f6; transition: fill 0.3s ease; }`}
              </style>
            </defs>
            <g id="iteration_1" data-name="iteration 1">
              <path className="smiley-face" onClick={handleSmileyClick} style={{cursor: 'pointer'}} d="M144.09,0h-55.11C78.69,0,70.61,9,71.49,19.47l6.54,77.39c.67,6.34,5.89,11.13,12.1,11.13h52.8c6.21,0,11.43-4.8,12.1-11.13l6.54-77.39C162.47,9,154.38,0,144.09,0ZM134.54,40.39c3.15,0,5.71,2.56,5.71,5.71s-2.56,5.71-5.71,5.71-5.71-2.56-5.71-5.71,2.56-5.71,5.71-5.71ZM98.54,40.39c3.15,0,5.71,2.56,5.71,5.71s-2.56,5.71-5.71,5.71-5.71-2.56-5.71-5.71,2.56-5.71,5.71-5.71ZM147.71,67.62c0,14-11.45,25.45-25.45,25.45h-11.44c-14,0-25.45-11.45-25.45-25.45h0c0-5.08,4.16-9.23,9.23-9.23h43.87c5.08,0,9.23,4.16,9.23,9.23h0Z"/>
              <path className="cls-1" d="M408.54,75.64v-5.17c0-3.06,2.44-5.53,5.45-5.53h25.1c3.01,0,5.45-2.48,5.45-5.53v-13.29c0-3.06-2.44-5.53-5.45-5.53h-25.1c-3.01,0-5.45-2.48-5.45-5.53v-5.17c0-3.06,2.44-5.53,5.45-5.53h25.1c3.01,0,5.45-2.48,5.45-5.53V5.53c0-3.06-2.44-5.53-5.45-5.53h-54.94c-3.01,0-5.45,2.48-5.45,5.53v96.94c0,3.06,2.44,5.53,5.45,5.53h54.94c3.01,0,5.45-2.48,5.45-5.53v-15.77c0-3.06-2.44-5.53-5.45-5.53h-25.1c-3.01,0-5.45-2.48-5.45-5.53Z"/>
              <path className="cls-1" d="M354.88,67.53v3.38c0,2.99-2.39,5.41-5.33,5.41h-16.33c-2.95,0-5.33-2.42-5.33-5.41v-33.82c0-2.99,2.39-5.41,5.33-5.41h16.33c2.95,0,5.33,2.42,5.33,5.41v3.38c0,2.99,2.39,5.41,5.33,5.41h8.75c2.95,0,5.33-2.42,5.33-5.41V5.41c0-2.99-2.39-5.41-5.33-5.41h-55.17c-2.95,0-5.33,2.42-5.33,5.41v97.18c0,2.99,2.39,5.41,5.33,5.41h55.17c2.95,0,5.33-2.42,5.33-5.41v-35.06c0-2.99-2.39-5.41-5.33-5.41h-8.75c-2.95,0-5.33,2.42-5.33,5.41Z"/>
              <path className="cls-1" d="M238.23,5.55v96.9c0,3.07,2.45,5.55,5.47,5.55h10.48c3.02,0,5.47-2.49,5.47-5.55v-11.67c0-3.07,2.45-5.55,5.47-5.55h12.06c3.02,0,5.47,2.49,5.47,5.55v11.67c0,3.07,2.45,5.55,5.47,5.55h10.48c3.02,0,5.47-2.49,5.47-5.55V5.55c0-3.07-2.45-5.55-5.47-5.55h-54.9c-3.02,0-5.47,2.49-5.47,5.55ZM275.79,62.91h-9.27c-3.02,0-5.47-2.49-5.47-5.55v-18.32c0-3.07,2.45-5.55,5.47-5.55h9.27c3.02,0,5.47,2.49,5.47,5.55v18.32c0,3.07-2.45,5.55-5.47,5.55Z"/>
              <path className="cls-1" d="M193.54,74.96V6.21c0-3.43-2.74-6.21-6.12-6.21h-13.3c-3.38,0-6.12,2.78-6.12,6.21v95.58c0,3.43,2.74,6.21,6.12,6.21h53.61c3.38,0,6.12-2.78,6.12-6.21v-14.42c0-3.43-2.74-6.21-6.12-6.21h-28.07c-3.38,0-6.12-2.78-6.12-6.21Z"/>
              <path className="cls-1" d="M32.54,39.39v-3.69c0-3.46,2.77-6.27,6.18-6.27h20.94c3.41,0,6.18-2.81,6.18-6.27V6.27c0-3.46-2.77-6.27-6.18-6.27H6.18C2.77,0,0,2.81,0,6.27v53.41c0,3.46,2.77,6.27,6.18,6.27h20.18c3.41,0,6.18,2.81,6.18,6.27v3.69c0,3.46-2.77,6.27-6.18,6.27H6.18c-3.41,0-6.18,2.81-6.18,6.27v13.27c0,3.46,2.77,6.27,6.18,6.27h53.48c3.41,0,6.18-2.81,6.18-6.27v-49.8c0-3.46-2.77-6.27-6.18-6.27h-20.94c-3.41,0-6.18-2.81-6.18-6.27Z"/>
            </g>
          </svg>
          <p>Fix the body that builds.</p>
          <div className="hero-cta">
            <button 
              className="cta-button" 
              onClick={() => document.querySelector('.post-list').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Blog
            </button>
          </div>
        </div>
      </section>
      <section className="about">
        <div className="about-content">
          <h2>About Solace</h2>
          <p className="about-description">
          Solace was built for the people who keep the skyline standing. Iron work is brutal on the body and the mind — but recovery shouldn't feel impossible. We turn self-care into something simple, gamified, and built for your world — helping you trade pain for real progress.
          </p>
          <div className="about-screens">
            <img 
              src={process.env.PUBLIC_URL + "/Solace_Screens.png"} 
              alt="Solace App Screenshots" 
              className="screens-image"
            />
          </div>
         
          <div className="about-features">
            <div className="feature">
              <h3>Gamified Recovery</h3>
              <p>Turn recovery into a challenge. Earn XP, level up your mascot, and stay motivated through daily wellness missions.</p>
            </div>
            <div className="feature">
              <h3>Trade-Specific Plans</h3>
              <p>AI-driven programs built for real workdays. Get routines that adapt to your schedule, pain points, and fatigue levels.</p>
            </div>
            <div className="feature">
              <h3>Recovery That Sticks</h3>
              <p>Straightforward routines that fit between shifts, ease the strain, and make a real difference over time.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Gallery/>
      </section>
      <Routes>
        <Route
          path="/"
          element={
            <main className="post-list">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </main>
          }
        />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
      <section className="team">
        <div className="team-content">
          <h2>Meet Our Team</h2>
          <p className="team-description">
            The passionate individuals behind Solace, working together to improve healthcare for tradespeople.
          </p>
          <div className="team-grid">
            <div className="team-row">
              {teamMembers.slice(0, 4).map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
            <div className="team-row">
              {teamMembers.slice(4, 7).map((member) => (
                <TeamMember key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

    
      <footer>
        <div className="copyright">
          © 2025 Team Solace. All rights reserved.
        </div>
      </footer>

      {/* Popup Modal */}
      {showPopup && (
        <div className="popup-overlay" onClick={handleClosePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={handleClosePopup}>×</button>
            <img 
              src={process.env.PUBLIC_URL + "/happysolly.png"} 
              alt="Happy Solly" 
              className="popup-image"
            />
            <p className="popup-text">You Found Me!</p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;