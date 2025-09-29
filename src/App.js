import React from "react";
import { Routes, Route } from "react-router-dom";
import posts from "./posts";
import teamMembers from "./teamData";
import PostCard from "./components/PostCard";
import PostPage from "./components/PostPage";
import TeamMember from "./components/TeamMember";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">
            <h1>Solace</h1>
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
                const elementPosition = element.offsetTop;
                const offsetPosition = elementPosition - 200;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                });
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
          <img src={process.env.PUBLIC_URL + "/post-images/catTest.png"} alt="Team Solace Hero" />
        </div>
        <div className="hero-content">
          <h2>Welcome Solace's Progress Blog</h2>
          <p>Follow our journey as we change healthcare for tradespeople.</p>
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
            Solace is an app that helps tradespeople build a healthier lifestyle by focusing on simple ways to improve their wellbeing. We aim to help tradespeople work stronger and healthier without relying on harmful coping mechanisms. Through simple check-ins and personalized exercises, Solace is a lifestyle assistant to tradesworkers.
          </p>
          <div className="about-features">
            <div className="feature">
              <h3>Simple Check-ins</h3>
              <p>Easy daily assessments to track your wellbeing and progress</p>
            </div>
            <div className="feature">
              <h3>Personalized Exercises</h3>
              <p>Customized routines designed specifically for tradespeople</p>
            </div>
            <div className="feature">
              <h3>Healthy Lifestyle</h3>
              <p>Build sustainable habits that support your physical and mental health</p>
            </div>
          </div>
        </div>
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
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    
      <footer>
        <div className="copyright">
          © 2025 Team Solace. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
