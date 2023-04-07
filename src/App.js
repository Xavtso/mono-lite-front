
// import AuthForm from './components/AuthForm';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="body">
      <Router>
        <Routes>
          {/* <Route  /> */}

          <Route exact path="/" element={<Home />} />
          <Route path = '/account' element = {<UserPage/>} /> 
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/signin" element={<SignIn/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 