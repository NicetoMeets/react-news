import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FooterMode, TodoAction } from "../../Common/action";
import { setTodo } from "../../Common/todoReducer";

function Footer ({mode, event}) {

    const isAddPage = mode === FooterMode.ADD_PAGE;
    const isAddTodo = mode === FooterMode.ADD_TODO;
    const isUpdateTodo = mode === FooterMode.UPDATE_TODO;

    return (
        <>
        {
            isAddPage && 
            <Link to="/todo" state={{action: TodoAction.ADD}}>
                <button className="footer">할 일 추가</button>
            </Link>
        }
        {
            isAddTodo && 
            <button className="footer" onClick={event}>할 일 추가</button>
        }
        {
            isUpdateTodo && 
            <button className="footer" onClick={event}>할 일 수정</button>

        }
        </>
    )
}

export default Footer;