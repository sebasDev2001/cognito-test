import { BrowserRouter as Router,Routes, Route, Link, Navigate } from "react-router-dom";
import SingupForm from "./components/singup-form.js";
import MainPage from "./components/main-page.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/singup" element={<SingupForm/>}>
        </Route>
        <Route path="/home" element={<MainPage/>}>       
        </Route>
        <Route path="/" element={<Navigate to="/singup" />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
