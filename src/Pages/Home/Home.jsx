import { FooterMode } from "../../Common/action";
import News from "../../Components/News/News";
import TodoItem from "../../Components/TodoItem/TodoItem";
import Footer from "../../Layout/Footer/Footer";

function Home () {

    const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
    const now = new Date();
    const date = now.getDate();
    const day = WEEKDAY[now.getDay()];
    
    return (
        <div className="home">
            <h1>News TO-DO!</h1>
            <p>오늘은 {date}일 {day}요일 입니다.</p>
            <News />
            <TodoItem />
            <div style={{"marginBottom" : "80px"}}></div>
            <Footer mode={FooterMode.ADD_PAGE}/>
        </div>
        
    )
}

export default Home;