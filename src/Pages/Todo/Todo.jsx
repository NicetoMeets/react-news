import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { TodoAction } from "../../Common/action";
import { setTodo } from "../../Common/todoReducer";
import Footer from "../../Layout/Footer/Footer";

function Todo () {

    const navigate = useNavigate();
    const location = useLocation();
    const action = location.state?.action;

    const [isAdd, setIsAdd] = useState(action === TodoAction.ADD ? true : false);

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
            <h1>{isAdd ? "할 일 추가" : "할 일 수정"}</h1>
            <h2>제목</h2>
            <input name="title" onChange={(e) => onChangeInput(e)}></input>
            <h2>설명</h2>
            <textarea name="cntnt" onChange={(e) => onChangeInput(e)}></textarea>
            <h2>반복</h2>
            <input name="days" onChange={(e) => onChangeInput(e)}></input>
            <Footer />
        </div>
    )
}

export default Todo;