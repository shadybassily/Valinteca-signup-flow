import './App.css'
import Welcome from "./pages/Welcome";
import SignUp from "./pages/SignUp";
import Succeed from "./pages/Succeed";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/sign-up" element={<SignUp />}/>
        <Route path="/succeed" element={<Succeed />}/>
      </Routes>
    </Router>
  );
}

export default App;
