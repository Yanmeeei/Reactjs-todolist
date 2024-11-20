import TodoCard from "./TodoCard.jsx";

export default function TodoList(props) {
    const {todos} = props
    return (
        <ul className={"main"}>
            {todos.map((todo, todo_idx) => (
                <TodoCard {...props} index={todo_idx} key={todo_idx}>
                    <p>{todo}</p>
                </TodoCard>
            ))}
        </ul>
    )
}
