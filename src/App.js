import { Routes, Route } from "react-router-dom";
import Home from './pages/Homepage'
import UserPage from "./pages/AccountPage";
import TechPage from "./pages/TechPage";
import About from "./components/home-page/about/About";
import "./styles/main.scss";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/account" element={<UserPage />} />
      <Route exact path="/tech-about" element={<TechPage />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
