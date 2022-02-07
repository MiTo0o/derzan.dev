// import libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import styling
import "./App.css";

//import components
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
