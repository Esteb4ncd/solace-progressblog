// import React from "react";
// import { Link } from "react-router-dom";
// // import "./PostCard.css";

// export default function PostCard({ post }) {
//   return (
//     <div className="post-card">
//       <img src={post.image} alt={post.header} />
//       <h2>{post.header}</h2>
//       <p>{post.date}</p>
//       <p>{post.description}</p>
//       <Link to={`/post/${post.id}`}>Read More</Link>
//     </div>
//   );
// }

// src/components/PostCard.js
import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post }) {
  // Limit preview to 150 characters
  const previewText =
    post.description.length > 150
      ? post.description.substring(0, 150) + "..."
      : post.description;

  return (
    <div className="post-card">
      <img src={post.image} alt={post.header} />
      <h2>{post.header}</h2>
      <p><em>{post.date}</em></p>
      <p>{previewText}</p>
      <Link to={`/post/${post.id}`}>Read More</Link>
    </div>
  );
}

export default PostCard;
