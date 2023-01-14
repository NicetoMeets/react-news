import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { TodoAction } from "../../Common/action";

function Todo () {

    const navigate = useNavigate();
    const location = useLocation();
    const action = location.state?.action;

    const [isAdd, setIsAdd] = useState(action === TodoAction.ADD ? true : false);

    return (
        <>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <p>{isAdd ? "할 일 추가" : "할 일 수정"}</p>
            <strong>제목</strong>
            <input></input>
            <strong>설명</strong>
            <input></input>
            <strong>반복</strong>
            <input></input>
        </>
    )
}

export default Todo;