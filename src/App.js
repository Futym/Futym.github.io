import "./App.css";
import { ContactForm } from "./ContactForm";
import { Projects } from "./Projects";
import { About } from "./About";
import { Excuses } from "./Excuses";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/excuses">Excuses</Link>
        <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/contact" element={<ContactForm/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/excuses" element={<Excuses />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
