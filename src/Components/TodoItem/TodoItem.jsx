import { useSelector } from "react-redux";

function TodoItem () {

    const todos = useSelector((state) => {
        return state.todo;
    })

    console.log(todos, 'todos')

    return (
        <>
            <strong>오늘의 할 일</strong>
        </>
    )
}

export default TodoItem;