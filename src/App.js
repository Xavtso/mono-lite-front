import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import TechAbout from './components/tech-about/TechAbout';

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path = '/account' element = {<UserPage/>} /> 
          <Route path="/tech-about" element={<TechAbout/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 