// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import posts from "../posts";
// // import "./PostPage.css";

// export default function PostPage() {
//   const { id } = useParams();
//   const post = posts.find((p) => p.id === parseInt(id));

//   if (!post) return <p>Post not found</p>;

//   return (
//     <div className="post-page">
//       <Link to="/">← Back to All Posts</Link>
//       <h1>{post.header}</h1>
//       <p>{post.date}</p>
//       <img src={post.image} alt={post.header} />
//       <p>{post.description}</p>
//     </div>
//   );
// }

import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../posts";

export default function PostPage() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="post-page">
      <Link to="/">← Back to All Posts</Link>
      <h1>{post.header}</h1>
      <p>{post.date}</p>
      <img src={post.image} alt={post.header} />

      {/* render description as HTML */}
      <div
        className="prose mt-4"
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
    </div>
  );
}
