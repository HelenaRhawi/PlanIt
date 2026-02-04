import { useState } from 'react'

function TodoList () {
    const [todos, setTodos] = useState ([])
    const [text, setText] = useState ('')

    function addTodo (e) {
        e.preventDefault()
        if(!text) return

        setTodos([
            ...todos,
            {
                id: Date.now(),
                text,
                completed: false
            }
        ])
        setText('')
    }

    function toggleTodo(id) {
        setTodos(
            todos.map(todo =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        )
    }
    return (
        <div>
            <h2>Todos</h2>

            <form onSubmit={addTodo}>
                <input type="text"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Add a todo" 
                />
                <button>Add</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <label>
                            <input type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                            />
                            <span style={{
                                textDecoration: todo.completed ? 'line.through' : 'none'
                            }}>
                                {todo.text}
                            </span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList