import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList.jsx";
import {useState, useEffect} from "react";

// TODO: props, state, useEffect, components, jsx, etc.

function App() {

    const [todos, setTodos] = useState([])
    const [todoValue, setTodoValue] = useState("")

    function persistData(newList) {
        localStorage.setItem("todos", JSON.stringify({todos: newList}))
    }

    function handleAddTodos(newTodo) {
        const newTodoList = [...todos, newTodo]
        setTodos(newTodoList)
        persistData(newTodoList)
    }

    function handleDeleteTodo(target_idx) {
        const newTodoList = todos.filter((todo, todo_idx) => {
            return todo_idx !== target_idx
        })
        setTodos(newTodoList)
        persistData(newTodoList)
    }

    function handleEditTodo(target_idx) {
        const value_tobe_edited = todos[target_idx]
        setTodoValue(value_tobe_edited)
        handleDeleteTodo(target_idx)
        persistData(todos)
    }

    useEffect(() => {
        if (!localStorage) {
            return
        }

        let localTodos = localStorage.getItem("todos")
        if (!localTodos) {
            return
        }

        localTodos = JSON.parse(localTodos).todos
        setTodos(localTodos)
    }, [])  // whenever a page reload, read the local storage and restore the todos

    // return react fragments jsx (functional component)
    return (
        <>
            <TodoInput handleAddTodos={handleAddTodos} todoValue={todoValue} setTodoValue={setTodoValue}/>
            <TodoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos}/>
        </>
    )
}

export default App
