import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserPage from './pages/UserPage';
import TechAbout from './components/tech-about/TechAbout';
import About from "./components/home-page/about/About";
import { useEffect } from "react";
import { gapi } from "gapi-script";

function App() {
const clientId =
  "76117731491-v6vmn6qs6m1f2ahl4elukmcuhkoojd1p.apps.googleusercontent.com";

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start)
  })

  
  return (
    <div className="body">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path = '/account' element = {<UserPage/>} /> 
          <Route path="/tech-about" element={<TechAbout/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 