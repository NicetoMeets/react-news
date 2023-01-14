import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { TodoAction } from "../../Common/action";
import { setTodo } from "../../Common/todoReducer";

function Todo () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const action = location.state?.action;

    const [isAdd, setIsAdd] = useState(action === TodoAction.ADD ? true : false);

    const saveTodo = () => {
        dispatch(setTodo("1"));
    }

    return (
        <>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <p>{isAdd ? "할 일 추가" : "할 일 수정"}</p>
            <strong>제목</strong>
            <input name="title"></input>
            <strong>설명</strong>
            <input name="cntnt"></input>
            <strong>반복</strong>
            <input name="days"></input>
            <button onClick={() =>saveTodo()}>저장하기</button>
        </>
    )
}

export default Todo;