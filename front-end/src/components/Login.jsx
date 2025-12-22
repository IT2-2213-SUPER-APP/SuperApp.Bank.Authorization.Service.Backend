import { useState } from "react";
import Button from "./button-tab/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new URLSearchParams();
      formData.append("username", form.email);
      formData.append("password", form.password);

      const response = await fetch("http://localhost:8011/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.access_token);
        localStorage.setItem("user_id", data.id);
        navigate("/bank"); 
      } else {
        alert(data.detail || "Ошибка входа");
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка соединения с сервером");
    }
  };

  return (
    <div style={{ margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form id="loginform" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Электронная почта"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={form.password}
          onChange={handleChange}
          required
        />
        <Button type="submit">Войти</Button>
      </form>
    </div>
  );
}
