import {useState} from "react";

export default function TodoInput(props) {
    let {handleAddTodos, todoValue, setTodoValue} = props

    return (
        <header>
            <input value={todoValue} onChange={(e) => (
                setTodoValue(e.target.value)
            )} placeholder={"Enter todo item"} />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue("")
            }}>Add</button>
        </header>
    )
}