import { Routes, Route, useNavigate } from 'react-router-dom'
import LogIn from './components/login/LogIn.jsx'
import './App.css'

function App() {
  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate('/login')}>
        Log In
      </button>

    <Routes>
      <Route
      path="/"
      element ={
        <>
        <h1>PlanIt</h1>
        <p>Planit will help you with...</p>
        <p>Getting orginized with your daily life.</p>
        <p>Planing your day, month and year.</p>
      </>

      }
      />
      
      <Route path="/login" element={<LogIn />}/>
    </Routes>
    </div>
  )
}

export default App
