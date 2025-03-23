import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Workspage from "./pages/Workspage";
import Project1 from "./components/projects/Project1";
import Home from "./pages/Home"; // Assuming you have a Home.jsx

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Workspage />} />
        <Route path="/project1" element={<Project1 />} />
      </Routes>
    </Router>
  );
}

export default App;
