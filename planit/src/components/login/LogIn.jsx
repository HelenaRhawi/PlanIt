import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function LogIn () {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    const [error, setError] = useState ('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        if (!email || !password) {
            setError('Please fill in all fields')
            return
        }
        
        setError('')
        navigate('/todolist')
    }

    return (
        <div>
            <h2>Log in to PlanIt</h2>

            <form onSubmit={handleSubmit}> 
                <div>
                    <label>Email</label> <br />
                    <input type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div>
                    <label>Password</label> <br />
                    <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <br />

                <button type="submit">Log in</button>
            </form>

            <br />

            <Link to="/">Home</Link>
        </div>
    )
}

export default LogIn