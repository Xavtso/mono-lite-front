import {Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import TechAbout from './components/tech-about/TechAbout';
import About from "./components/home-page/about/About";

function App() {
  return (
    <div className="body">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path = '/account' element = {<UserPage/>} /> 
          <Route exact path="/tech-about" element={<TechAbout/>} />
          <Route exact path="/about" element={<About/>} />
        </Routes>
    </div>
  );
}

export default App;
 