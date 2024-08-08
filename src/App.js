import React from "react";
import About from "./Components/About";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<About />}/>
          <Route path="/projects" element={ <Projects />}/>
          <Route path="/skills" element={<Skills />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
