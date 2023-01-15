import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeTodo } from "../../Common/todoReducer";

function TodoItem () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todos = useSelector((state) => {
        return state.todo.todo;
    })

    const onClickTodo = () => {
        
    }

    const onClickRemove = (idx) => {
        dispatch(removeTodo(idx));
    }

    return (
        <>
            <h2>오늘의 할 일</h2>
            <div>
            {
                todos && todos.todo.map((item, idx) => {
                    return <div key={idx} className="today" onClick={() => onClickTodo(item)}>
                        <strong>{item.title}</strong>
                        <div className="close" onClick={() => onClickRemove(idx)}></div>
                        <p>{item.cntnt}</p>
                        <p>{item.days.map((item) => {
                                switch(item) {
                                    case "mon":
                                        return "월";
                                    case "tue":
                                        return "화";
                                    case "wen":
                                        return "수";
                                    case "thu":
                                        return "목";
                                    case "fri":
                                        return "금";
                                    case "sat":
                                        return "토";
                                    case "sun":
                                        return "일";
                                }
                            }).join(",")}
                            {item.days.length != 0 && "요일 반복"}</p>
                    </div>
                })
            }
            </div>
        </>
    )
}

export default TodoItem;