 import React, { useState } from "react";
import './App.css'

function App() {

  const limits = {
    Twitter: 280,
    Instagram: 220,
    LinkedIn: 300,
  };

  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = limits[platform];
  const remaining = limit - post.length;


  return (
    <div id="container">
      <h2>Post Composer</h2>

      <label>Select Platform:</label>
      <br />
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)} >
        <option>Twitter</option>
        <option>Instagram</option>
        <option>LinkedIn</option>
      </select>

      <br />
      <br/>

      <textarea className="textarea"
        rows="6"
        placeholder="Write your post here..."
        value={post}
        onChange={(e) => setPost(e.target.value)} 
      />

      <p>
        Characters: {post.length} / {limit}
      </p>

      {remaining >= 0 ? (
        <p className="green">
          You can type {remaining} more characters.
        </p>
      ) : (
        <p className="red">
          Character limit exceeded by {-remaining} characters.
        </p>
      )}
    </div>
  );
} 

export default App;


