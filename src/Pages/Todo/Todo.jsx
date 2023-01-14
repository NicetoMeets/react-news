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
        console.log(input, 'save')
        dispatch(setTodo(input));
    }

    const [input, setInput] = useState({});
    const onChangeInput = (e) => {
        const { target : { value, name }} = e;
        
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <div className="todos">
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <strong>{isAdd ? "할 일 추가" : "할 일 수정"}</strong>
            <p>제목</p>
            <input name="title" onChange={(e) => onChangeInput(e)}></input>
            <p>설명</p>
            <textarea name="cntnt" onChange={(e) => onChangeInput(e)}></textarea>
            <p>반복</p>
            <input name="days" onChange={(e) => onChangeInput(e)}></input>
            <button onClick={() =>saveTodo()}>저장하기</button>
        </div>
    )
}

export default Todo;