import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import About from "./Components/InfoContainers/About";
import Goals from "./Components/InfoContainers/Goals";
import Skills from "./Components/InfoContainers/Habilities";
import Tech from "./Components/InfoContainers/Tech";
import Contact from "./Components/Contact/Contact";
import Projects from "./Components/Projects/Projects";

function App() {
  function scrollToSection(section) {
    console.log(section, "<---");
    const element = document.querySelector(`#${section}`);
    element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="App">
      <Nav scrollToSection={scrollToSection} />
      <Landing />
      <About />
      <Goals />
      <Skills />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
