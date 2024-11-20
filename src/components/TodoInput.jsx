import {useState} from "react";

export default function TodoInput(props) {
    let {handleAddTodos, todoValue, setTodoValue} = props
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleAddTodos(todoValue);
            setTodoValue("");
        }
    };

    return (
        <header>
            <input value={todoValue}
                   onChange={(e) => (
                       setTodoValue(e.target.value)
                   )}
                   onKeyDown={handleKeyDown}
                   placeholder={"Enter todo item"}/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue("")
            }}>Add
            </button>
        </header>
    )
}