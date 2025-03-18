import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Workspage from "./pages/Workspage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Workspage />} />
      </Routes>
    </Router>
  );
}

export default App;
