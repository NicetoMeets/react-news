import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TodoAction } from "../../Common/action";
import { checkTodo } from "../../Common/checkReducer";
import { removeTodo } from "../../Common/todoReducer";

function TodoItem () {

    const WEEKDAY = ['sun', 'mon', 'tue', 'wen', 'thu', 'fri', 'sat'];
    const now = new Date();
    const day = WEEKDAY[now.getDay()];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const todos = useSelector((state) => {
        return state.todo.todo;
    })
    const checks = useSelector((state) => {
        return state.todo.check;
    })

    const checkTodo = (checkIdx) => {
        return checks.todo.filter((item, idx) => idx == checkIdx).length > 0;
    }

    const onClickTodo = (item, idx) => {
        navigate('/todo', {
            state: {
                action: TodoAction.UPDATE,
                todo: item,
                idx: idx
            }
        })
    }

    const onChangeCheck = (idx) => {
        dispatch(checkTodo(idx));
    }

    const onClickRemove = (idx) => {
        if (window.confirm('삭제하시겠습니까?'));
        dispatch(removeTodo(idx));
        navigate('')
    }

    return (
        <>
            <h2>오늘의 할 일</h2>
            <div>
            {
                todos && 
                todos.todo.filter((item) => {
                    return item.days.includes(day);
                }).map((item, idx) => {
                    return <div key={idx} className="today">
                        <input type="checkbox" className="check" onChange={() => onChangeCheck(idx)}/>
                        <div className="close" onClick={() => onClickRemove(idx)}></div>
                        <div onClick={() => onClickTodo(item, idx)}>
                            <p className="title">{item.title}</p>
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
                    </div>
                })
            }
            </div>
        </>
    )
}

export default TodoItem;