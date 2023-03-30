
// import AuthForm from './components/AuthForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/index.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          {/* <Route  /> */}

          <Route exact path="/" element={<Home/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 