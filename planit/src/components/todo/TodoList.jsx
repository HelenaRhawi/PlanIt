import { useEffect, useState } from 'react'

function TodoItem({ todo, toggleComplete}) {
    return (
        <li 
            style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            marginBottom: '0.5rem'
        }}>
            <input 
            type='checkbox'
            checked={todo.completed}
            onChange={() => toggleComplete(todo.id)}
             />
            {todo.title}
           
        </li>
    )
}

function TodoList () {
    const [todos, setTodos] = useState([]) 
    const [input, setInput] = useState('')
    const [loading, setLoading] =useState(false)
    const [error, setError] = useState('')

    //hämta todos från API
    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(res => {
            if(!res.ok) throw new Error('Could not fetch todos!')
                return res.json()
        })
        .then(data => {
            setTodos(data)
            setLoading(false)
        })
        .catch(err => {
            setError(err.message)
            setLoading(false)
        })
    }, [])

// Lägg till ny todo
const handleAddTodo = () => {
    if (!input.trim()) return

    const newTodo = {
        userId: 1,
        id: Date.now(),
        title: input,
        completed: false
    }
    setTodos (prev => [newTodo, ...prev,])
    setInput('')
}

// Toggle completed
function toggleComplete(id) {
    setTodos(prev =>
        prev.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
    )
}

return (
    <div>
        <h2>Todos</h2>
        {loading && <p>Loading activity...</p>}
        {error && <p style={{ color: 'red'}}>{error}</p>}

        <input type="text"
        placeholder='Add a Todo'
        value={input}
        onChange={e => setInput(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>

        <ul style= {{ listStyle: 'none', padding: 0}}>
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                />
            ))}
        </ul>

    </div>
)
}

export default TodoList