import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Button from './components/button-tab/button';


export default function App() {
  const [now, setNow] = useState(new Date())
  const [tab, setTab] = useState('register')
  

  function handleClick(title) {
    setTab(title)
  }
  return (
    <>
      <link rel="icon" href="/kaspi.svg"></link>

      <div className="tabs">

        <Button onClick={() => handleClick('register')} isActive={tab == 'register'}>Регистрация</Button>
        <Button onClick={() => handleClick('login')} isActive={tab == 'login'}>Вход</Button>

      </div>

      <div>
        {tab == 'register' ? <Register /> : <Login />}
      </div>


    </>
  );
}


