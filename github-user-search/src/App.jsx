// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Form from "./components/Search";

function App() {
  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Form />
    </div>
  );
}

export default App;
