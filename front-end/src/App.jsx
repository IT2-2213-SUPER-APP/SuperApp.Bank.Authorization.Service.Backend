import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Button from "./components/button-tab/Button";
import Bank from "./components/Bank"; 

function Tabs() {
  const [tab, setTab] = useState("register");

  return (
    <div className="auth-container">
      <div className="tabs">
        <Button onClick={() => setTab("register")} isActive={tab === "register"}>
          Регистрация
        </Button>
        <Button onClick={() => setTab("login")} isActive={tab === "login"}>
          Вход
        </Button>
      </div>

      <div className="form-container">
        {tab === "register" ? <Register /> : <Login />}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <link rel="icon" href="/kaspi.svg" />
      <Routes>
        <Route path="/" element={<Tabs />} />
        <Route path="/bank" element={<Bank />} /> {}
      </Routes>
    </Router>
  );
}
