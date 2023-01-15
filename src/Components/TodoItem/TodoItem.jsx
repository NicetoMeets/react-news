import { useSelector } from "react-redux";
import { removeTodo } from "../../Common/todoReducer";

function TodoItem () {

    const todos = useSelector((state) => {
        return state.todo.todo;
    })

    const onClickTodo = () => {

    }

    return (
        <>
            <h2>오늘의 할 일</h2>
            <div>
            {
                todos && todos.todo.map((item, idx) => {
                    return <div key={idx} className="today" onClick={() => onClickTodo()}>
                        <strong>{item.title}</strong>
                        <div className="close"></div>

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