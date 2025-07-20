import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Contact from "./component/Contact";
import Navbar from "./component/Navbar";

function App() {
  const pageWrapper = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <BrowserRouter>
      <Navbar />
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
