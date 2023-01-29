import "./App.css";
import { Routes, Route } from "react-router-dom";
import Billing from "./pages/Billing";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Billing />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
