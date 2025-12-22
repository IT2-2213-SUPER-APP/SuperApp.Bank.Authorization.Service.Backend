import { useState } from "react";
import Button from "./button-tab/Button";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8011/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          surname: form.surname,
          email: form.email,
          password: form.password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(`Регистрация успешна! ID пользователя: ${data.user_id}`);
      } else {
        const error = await response.json();
        alert(`Ошибка: ${error.detail}`);
      }
    } catch (err) {
      alert("Ошибка соединения с сервером");
      console.error(err);
    }
  };
  // margin: 0;
  // font-family: 'Open Sans', sans-serif;
  // background: #f0f0f0;
  // display: flex;
  // /* align-items: center;
  // justify-content: center; */
  // height: 100vh;

  return (
    <div style={{ margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <form id="registerform" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="surname"
          placeholder="Фамилия"
          value={form.surname}
          onChange={handleChange}
          required
        />
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
          maxLength={16}
          value={form.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Введите пароль снова"
          maxLength={16}
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />
        <Button type="submit">Зарегистрироваться</Button>
      </form>
    </div>
  );
}
