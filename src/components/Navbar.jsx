import React from "react";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <div className="logo">PORTFOLIO</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>
          <a href="#About">About me</a>
        </li>
        <li>
          <a href="#Skills">Skills</a>
        </li>
      </ul>
      <button
        className="btn-primary"
        onClick={() =>
          document
            .getElementById("About")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        Contact Me
      </button>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
    </nav>
  );
}

export default Navbar;
