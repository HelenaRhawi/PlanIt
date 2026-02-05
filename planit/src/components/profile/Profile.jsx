import { useEffect, useState } from "react"

function Profile () {
    const [history, setHistory] = useState([])
    const [streak, setStreak] = useState(0)

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todosByDate')) || {}

        const dates = Object.keys(savedTodos).sort().reverse()

        const historyData = dates.map(date => {
            const allDone =savedTodos[date].every(todo => todo.completed)
            return { date, allDone }
        })

        setHistory(historyData)

        let currentStreak = 0
        for (let day of historyData) {
            if (day.allDone) currentStreak++
            else break
        }

        setStreak(currentStreak)
    }, [])
   
   
    return (
        <div>
            <h2>My Profile</h2>
            <p>🔥 Current streak: {streak} days</p>

            <h3>Todo history</h3>
            <ul>
                {history.map(day => (
                    <li key={day.date}>
                        {day.date} {day.allDone ? '✅' : '❌'}
                    </li>
                ))}
            </ul>
        </div>
    )



}

export default Profile