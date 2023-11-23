import React from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import Landing from "./Components/Landing/Landing";
import About from "./Components/InfoContainers/About";
import Goals from "./Components/InfoContainers/Goals";
import Skills from "./Components/InfoContainers/Habilities";

function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <About />
      <Goals />
      <Skills />
    </div>
  );
}

export default App;
