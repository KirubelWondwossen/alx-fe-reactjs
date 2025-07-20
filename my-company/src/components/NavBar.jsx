import { Link } from "react-router-dom";

const Navbar = () => {
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

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
};

export default Navbar;
