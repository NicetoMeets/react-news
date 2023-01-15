import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FooterMode, TodoAction } from "../../Common/action";
import { setTodo } from "../../Common/todoReducer";
import Footer from "../../Layout/Footer/Footer";

function Todo () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const action = location.state?.action;

    const [isAdd,] = useState(action === TodoAction.ADD ? true : false);
    const [input, setInput] = useState({
        title: '',
        cntnt: '',
        days: []
    });

    const onChangeInput = (e) => {
        const { target : { value, name }} = e;
        
        setInput({
            ...input,
            [name]: value
        })
    }

    const onChangeDays = (e) => {
        const { target : { value, name }} = e;

        console.log(e)

        if (input.days.includes(name)){

            let temp = input.days;
            let idx = temp.indexOf(name);

            while (idx > -1) {
                temp.splice(idx, 1);
                idx = temp.indexOf(name)
            }

            setInput({
                ...input,
                days: temp
            })
        }
        else {
            setInput({
                ...input,
                days: [...input.days, name]
            })
        }
    }

    const saveTodo = () => {
        const {title, cntnt, days} = input;
        if (!title) return alert("제목은 필수입니다.");

        dispatch(setTodo(input));

        alert("저장이 완료되었습니다.");
    }

    return (
        <div className="todos">
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <h1>{isAdd ? "할 일 추가" : "할 일 수정"}</h1>
            <h2>제목</h2>
            <input name="title" onChange={(e) => onChangeInput(e)} placeholder="제목"></input>
            <h2>설명</h2>
            <textarea name="cntnt" onChange={(e) => onChangeInput(e)} placeholder="설명"></textarea>
            <h2>반복</h2>
            <div className="days">
                <button className={input.days.includes("mon") ? "isChecked" : "isNotChecked"} name="mon" onClick={(e) => onChangeDays(e)}>월</button>
                <button className={input.days.includes("tue") ? "isChecked" : "isNotChecked"} name="tue" onClick={(e) => onChangeDays(e)}>화</button>
                <button className={input.days.includes("wen") ? "isChecked" : "isNotChecked"} name="wen" onClick={(e) => onChangeDays(e)}>수</button>
                <button className={input.days.includes("thu") ? "isChecked" : "isNotChecked"} name="thu" onClick={(e) => onChangeDays(e)}>목</button>
                <button className={input.days.includes("fri") ? "isChecked" : "isNotChecked"} name="fri" onClick={(e) => onChangeDays(e)}>금</button>
                <button className={input.days.includes("sat") ? "isChecked" : "isNotChecked"} name="sat" onClick={(e) => onChangeDays(e)}>토</button>
                <button className={input.days.includes("sun") ? "isChecked" : "isNotChecked"} name="sun" onClick={(e) => onChangeDays(e)}>일</button>
            </div>
            <Footer mode={FooterMode.ADD_TODO} event={saveTodo}/>
        </div>
    )
}

export default Todo;