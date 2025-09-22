export default function Register() {
  return (
    <div>
    <form id="registerform">
      <input type="text" placeholder="Имя" required />
      <input type="text" placeholder="Фамилия" required />
      <input type="email" placeholder="Электронная почта" required />
      <input type="password" placeholder="Пароль" maxLength={16} required />
      <input type="password" placeholder="Введите пароль снова" maxLength={16} required />
      <button type="submit">Зарегистрироваться</button>
    </form>
    </div>
  );
}
