import React , {useState, useEffect} from "react";

import './styles/todos.css'

const Todos = () => {
    const [todo_list, setTodo_list] = useState([]);
    const [sorting, setSorting] = useState("id"); // default sorting option

    useEffect(() => {
        const user_id = JSON.parse(localStorage.getItem('user')).id

        async function importTodos() {
            const todo_list = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${user_id}`)
            const data = await todo_list.json()
            setTodo_list(data)
        }

        importTodos()
    }, [])

    const sortTodos = () => {
        if (sorting === "uncompleted") {
          return todo_list.filter((todo) => !todo.completed);
        } else if (sorting === "id") {
          return todo_list.sort((a, b) => a.id - b.id);
        } else if (sorting === "random") {
          return todo_list.sort(() => Math.random() - 0.5);
        } else {
          return todo_list;
        }
      };

    const handleTodoClick = (id) => {
        console.log(todo_list)
        const user = todo_list.find(user => user.id === id)
        const index = todo_list.indexOf(user)
        console.log(user)
        const new_list = todo_list.filter(function(el) { return el !== user; });
        console.log(new_list)
        user.completed = !user.completed
        new_list.splice(index, 0, user)
        setTodo_list(new_list)
    }



    return(
        <div className="todo-list">
            <div className="sort-select">
            <label>Sort by:</label>
            <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                <option value="uncompleted">Uncompleted</option>
                <option value="id">Sort by ID</option>
                <option value="random">Sort randomly</option>
            </select>
            </div>
            {sortTodos().map((todo) => (
            <div key={todo.id} className={`todo ${todo.completed ? 'completed' : ''}`}>
                <div className="checkbox-wrapper">
                <input
                    type="checkbox"
                    className="checkbox"
                    checked={todo.completed}
                    onChange={() => handleTodoClick(todo.id, !todo.completed)}
                />
                </div>
                <span className="title">{todo.title}</span>
            </div>
            ))}
        </div>
        
    )

}

export default Todos;