import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/profile";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:userId" element={<Profile />} />    
      </Routes>
    </Router>
  );
}

export default App;
