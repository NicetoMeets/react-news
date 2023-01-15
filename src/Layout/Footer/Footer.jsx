import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { TodoAction } from "../../Common/action";
import { setTodo } from "../../Common/todoReducer";

function Footer () {

    const dispatch = useDispatch();

    const saveTodo = () => {
        dispatch(setTodo());
    }

    return (
        <Link to="/todo" state={{action: TodoAction.ADD}}>
            <button className="footer">할 일 추가</button>
        </Link>
    )
}

export default Footer;