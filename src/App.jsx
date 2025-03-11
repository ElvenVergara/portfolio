import { Routes, Route } from "react-router-dom";
import About from "./components/about";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
