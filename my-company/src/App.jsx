import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import "./App.css";

function App() {
  const navStyle = {
    padding: "15px",
    backgroundColor: "#282c34",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "30px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  };

  const pageWrapper = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/services" style={linkStyle}>
          Services
        </Link>
        <Link to="/contact" style={linkStyle}>
          Contact
        </Link>
      </nav>

      <div style={pageWrapper}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
