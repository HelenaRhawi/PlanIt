import { Routes, Route } from 'react-router-dom'
import Home from './components/home/Home.jsx'
import LogIn from './components/login/LogIn.jsx'
import Contacts from './components/contact/Contact.jsx'
import TodoList from './components/todo/TodoList.jsx'
import Profile from './components/profile/Profile.jsx'
import './App.css'

function App() {
return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LogIn />}/>
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/profile" element={<Profile />}/>
      <Route path="/todolist" element={<TodoList />}/>
    </Routes>

  )
}

export default App
