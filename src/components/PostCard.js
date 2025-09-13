import React from "react";
import { Link } from "react-router-dom";
// import "./PostCard.css";

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.header} />
      <h2>{post.header}</h2>
      <p>{post.date}</p>
      <p>{post.description}</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
}

