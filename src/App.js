import { BrowserRouter as Router,Routes, Route, Link, Navigate } from "react-router-dom";
import SingupForm from "./components/singup-form.js";
import MainPage from "./components/main-page.js";
import LoginForm from "./components/login-form.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/singup" element={<SingupForm/>}/>
        <Route path="/home" element={<MainPage/>}/>  
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/" element={<Navigate to="/login"/>}/>
      </Routes>
    </Router>
  );
}

export default App;
