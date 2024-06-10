import { useState } from "react"


export default function TodoList() {
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo(""); // Clear the input field
        }
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input placeholder="add a task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <button onClick={addNewTask}>ADD TASK</button>
            <br />
            <br />
            <br />
            <hr />
            <ul>
                {todos.map((todo, index) => (

                    <li key={index}>{todo}</li>
                )
                )
                }
            </ul>
        </div>
    )
}
