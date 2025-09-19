import React from "react";
import { Routes, Route } from "react-router-dom";
import posts from "./posts";
import PostCard from "./components/PostCard";
import PostPage from "./components/PostPage";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="logo">
            <h1>Team Solace</h1>
          </div>
          <nav className="main-nav">
            <a href="#blog" className="nav-link">Blog</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#team" className="nav-link">Team</a>
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
      <footer>
        <h3>Connect With Us</h3>
        <div className="team-members">
          <div className="team-member">
            <a href="https://linkedin.com/in/sarah-wang" target="_blank" rel="noopener noreferrer">
              Sarah Wang
            </a>
          </div>
          <div className="team-member">
            <a href="https://linkedin.com/in/esteban-cd" target="_blank" rel="noopener noreferrer">
              Esteban Cruz Dominguez
            </a>
          </div>
          <div className="team-member">
            <a href="https://linkedin.com/in/mateusz-m" target="_blank" rel="noopener noreferrer">
              Mateusz Matyskiewicz  
            </a>
          </div>
          <div className="team-member">
            <a href="https://linkedin.com/in/angel-h" target="_blank" rel="noopener noreferrer">
              Angel Hsieh
            </a>
          </div>
          <div className="team-member">
            <a href="https://linkedin.com/in/rosie-l" target="_blank" rel="noopener noreferrer">
              Rosie Lee
            </a>
          </div><div className="team-member">
            <a href="https://linkedin.com/in/hyunjung-s" target="_blank" rel="noopener noreferrer">
              Hyunjung Shin
            </a>
          </div><div className="team-member">
            <a href="https://linkedin.com/in/zinna-k" target="_blank" rel="noopener noreferrer">
              Zinna Kim
            </a>
          </div>
        </div>
        <div className="copyright">
          © 2025 Team Solace. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
