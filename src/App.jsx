import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import About from "./Components/InfoContainers/About";
import Goals from "./Components/InfoContainers/Goals";
import Skills from "./Components/InfoContainers/Habilities";
import Tech from "./Components/InfoContainers/Tech";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Goals />
      <Skills />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
