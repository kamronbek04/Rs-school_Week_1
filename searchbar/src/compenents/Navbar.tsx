import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M11 7l1.44 2.16c.31.47 1.01.84 1.57.84H17V8h-3l-1.44-2.16a5.94 5.94 0 0 0-1.4-1.4l-1.32-.88a1.72 1.72 0 0 0-1.7-.04L4 6v5h2V7l2-1-3 14h2l2.35-7.65L11 14v6h2v-8l-2.7-2.7L11 7zm1-3a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        </svg>
        <a href="/">Travel</a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Search</a>
        </li>
        <li>
          <a href="/card">About us</a>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
