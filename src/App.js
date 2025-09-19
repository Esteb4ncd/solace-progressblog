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
        <h1>Team Solace</h1>
        <div className="subtitle">Progress Blog</div>
      </header>
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
        <h3>Meet Our Team</h3>
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
          © 2024 Team Solace. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App;
