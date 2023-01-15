import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { FooterMode, TodoAction } from "../../Common/action";
import { setTodo, updateTodo } from "../../Common/todoReducer";
import Footer from "../../Layout/Footer/Footer";

function Todo () {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const action = location.state?.action;
    const todoInfo = location.state?.todo;
    const updateIdx = location.state?.idx;

    const [isAdd,] = useState(action === TodoAction.ADD ? true : false);
    const [input, setInput] = useState({
        title: '',
        cntnt: '',
        days: []
    });
    const [updateInput, setUpdateInput] = useState({
        title: todoInfo?.title,
        cntnt: todoInfo?.cntnt,
        days: todoInfo?.days
    });
    const todoInput = isAdd ? input : updateInput;
    const todoSetInput = isAdd ? setInput : setUpdateInput;

    const onChangeInput = (e) => {
        const { target : { value, name }} = e;
        
        todoSetInput({
            ...todoInput,
            [name]: value
        })
    }

    const onChangeDays = (e) => {
        const { target : { value, name }} = e;

        if (todoInput.days.includes(name)){

            let temp = todoInput.days;
            let idx = temp.indexOf(name);

            while (idx > -1) {
                temp.splice(idx, 1);
                idx = temp.indexOf(name)
            }

            todoSetInput({
                ...todoInput,
                days: temp
            })
        }
        else {
            todoSetInput({
                ...todoInput,
                days: [...todoInput.days, name]
            })
        }
    }

    const saveTodo = () => {

        const {title, cntnt, days} = input;
        if (!title) return alert("제목은 필수입니다.");

        dispatch(setTodo(input));

        alert("저장이 완료되었습니다.");
        navigate('/');
    }

    const updatePrevTodo = () => {
        const {title, cntnt, days} = updateInput;
        if (!title) return alert("제목은 필수입니다.");

        dispatch(updateTodo({updateInput, updateIdx}));

        alert("수정이 완료되었습니다.");
        navigate('/');
    }

    return (
        <div className="todos">
            <button onClick={() => navigate(-1)}>뒤로가기</button>
            <h1>{isAdd ? "할 일 추가" : "할 일 수정"}</h1>
            <h2>제목</h2>
            <input name="title" onChange={(e) => onChangeInput(e)} value={todoInput.title} placeholder="제목"></input>
            <h2>설명</h2>
            <textarea name="cntnt" onChange={(e) => onChangeInput(e)} value={todoInput.cntnt} placeholder="설명"></textarea>
            <h2>반복</h2>
            <div className="days">
                <button className={todoInput.days.includes("mon") ? "isChecked" : "isNotChecked"} name="mon" onClick={(e) => onChangeDays(e)}>월</button>
                <button className={todoInput.days.includes("tue") ? "isChecked" : "isNotChecked"} name="tue" onClick={(e) => onChangeDays(e)}>화</button>
                <button className={todoInput.days.includes("wen") ? "isChecked" : "isNotChecked"} name="wen" onClick={(e) => onChangeDays(e)}>수</button>
                <button className={todoInput.days.includes("thu") ? "isChecked" : "isNotChecked"} name="thu" onClick={(e) => onChangeDays(e)}>목</button>
                <button className={todoInput.days.includes("fri") ? "isChecked" : "isNotChecked"} name="fri" onClick={(e) => onChangeDays(e)}>금</button>
                <button className={todoInput.days.includes("sat") ? "isChecked" : "isNotChecked"} name="sat" onClick={(e) => onChangeDays(e)}>토</button>
                <button className={todoInput.days.includes("sun") ? "isChecked" : "isNotChecked"} name="sun" onClick={(e) => onChangeDays(e)}>일</button>
            </div>
            <div style={{"marginBottom" : "80px"}}></div>
            <Footer mode={FooterMode.ADD_TODO} event={isAdd ? saveTodo : updatePrevTodo}/>
        </div>
    )
}

export default Todo;