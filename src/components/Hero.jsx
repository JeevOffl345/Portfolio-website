import React, { useState } from "react";
import heroImage from "../assets/Profile.png"; // put your photo in src/assets/

function Hero() {
  const [message, setMessage] = useState("");

  return (
    <section className="hero">
      <div className="hero-text">
        <p>Hi I am</p>
        <h1>Jeevan Venkatachalam</h1>
        <h2 className="highlight">Aspiring Web Developer</h2>
        <div className="hero-buttons">
          <button
            className="btn-primary"
            onClick={() => {
              setMessage("Thanks for reaching out!");
              window.open(
                "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDpKBwVphrJLnjSCZnwNZvgmjTkZhVPFWDTWjnMNScHhbFGCGkLrZmRbkJpWJlmVhQJhDSq",
                "_blank"
              );
            }}
          >
            Let's Connect
          </button>
          <button
            className="btn-secondary"
            onClick={() => {
              window.open("https://github.com/JeevOffl345", "_blank");
            }}
          >
            <a href="https://github.com/JeevOffl345">GitHub</a>
          </button>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Profile" />
      </div>
    </section>
  );
}

export default Hero;
