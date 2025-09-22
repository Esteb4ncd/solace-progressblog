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
  // Limit preview to 120 characters
  const previewText =
    post.description.length > 120
      ? post.description.substring(0, 120) + "..."
      : post.description;

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="post-card">
      <img src={post.image} alt={post.header} />
      <h2>{post.header}</h2>
      <p>{previewText}</p>
      <Link to={`/post/${post.id}`}>READ MORE</Link>
      <div className="author-date">
        {post.author || 'Team Solace'} • {formatDate(post.date)}
      </div>
    </div>
  );
}

export default PostCard;
