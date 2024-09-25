import React from 'react'
import './index.css';
export default function App() {
  return (
    <>
      <div className="main">
        <p id="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere magnam eos, aut veniam harum quis fugit id,
          dolorum ducimus, necessitatibus cupiditate labore saepe commodi! Veritatis reiciendis eos quisquam distinctio
          eligendi.
        </p>
        <p id="author">
          <em>Duke</em>
        </p>
        <div className="navigation">
          <div className="links">
            <a href="#">🐥</a>
            <a href="#">T</a>
          </div>

          <button>New Quote</button>
        </div>
      </div>
      <blockquote>More Life</blockquote>
    </>
  );
}
