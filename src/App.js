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
          <Route exact path="/" element={<Home />} />
          <Route exact path = '/account' element = {<UserPage/>} /> 
          <Route path="/tech-about" element={<TechAbout/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 