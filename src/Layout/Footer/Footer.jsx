import { Link } from "react-router-dom";
import { TodoAction } from "../../Common/action";

function Footer () {

    return (
        <Link to="/todo" state={{action: TodoAction.ADD}}>
            <button className="footer">할 일 추가</button>
        </Link>
    )
}

export default Footer;