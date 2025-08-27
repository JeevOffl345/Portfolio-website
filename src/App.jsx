import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Stats from "./components/Stats.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import "./styles.css";

function App() {
  const statsData = [
    { number: "2+ months", text: "Learning Web Dev" },
    { number: "5+", text: "Projects Done" },
    { number: "Currently", text: "Building Portfolio Website" },
  ];
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Stats stats={statsData} />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
