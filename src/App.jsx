import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";
import Testimoni from "./pages/Testimoni";
import Allservice from "./pages/Allservices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimoni" element={<Testimoni />} />
        <Route path="/allservice" element={<Allservice />} />
      </Routes>
    </Router>
  );
}

export default App;

