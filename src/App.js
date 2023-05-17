import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import TechAbout from './components/tech-about/TechAbout';
import About from "./components/home-page/about/About";

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route  element = {<UserPage/>} /> 
          <Route  element={<TechAbout/>} />
          <Route  element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 