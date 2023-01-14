import { useSelector } from "react-redux";
import { removeTodo } from "../../Common/todoReducer";

function TodoItem () {

    const todos = useSelector((state) => {
        return state.todo.todo;
    })

    console.log(todos, 'todos')

    return (
        <>
            <strong>오늘의 할 일</strong>
            <button onClick={() => removeTodo()}>gd</button>

            <div className="t">
            {
                todos && todos.todo.map((item, idx) => {
                    return <div key={idx}>
                        <strong>{item.title}</strong>
                        <p>{item.cntnt}</p>
                        <p>{item.days}</p>
                    </div>
                })
            }
            </div>
        </>
    )
}

export default TodoItem;