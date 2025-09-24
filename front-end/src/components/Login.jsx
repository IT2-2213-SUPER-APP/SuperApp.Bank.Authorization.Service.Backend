import Button from "./button-tab/button";

export default function Login() {
    return (
      <div>
        <form id="loginform">
          <input type="email" placeholder="Электронная почта" required />
          <input type="password" placeholder="Пароль" maxLength={16} required />
          <Button type="submit">Войти</Button>
        </form>
      </div>
    );
}