import "./App.css";
import { Routes, Route } from "react-router-dom";
import Billing from "./pages/Billing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Billing />} />
    </Routes>
  );
}

export default App;
