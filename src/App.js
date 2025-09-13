import React from "react";
import { Routes, Route } from "react-router-dom";
import posts from "./posts";
import PostCard from "./components/PostCard";
import PostPage from "./components/PostPage";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>Solace's Progress Blog</header>

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

      <footer>Footer</footer>
    </div>
  );
}

export default App;
