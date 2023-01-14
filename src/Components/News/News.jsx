import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function News () {

    const [news, setNews] = useState();

    const getNews = async() => {
        const result = await axios.get(`http://127.0.0.1:8000/news?page=1&count=5`);
        setNews(result.data.items)
    }

    const onClickNews = (url) => {
        window.open(url)
    }

    useEffect(() => {
        getNews();
    }, [])

    return (
        <>
            <strong>오늘의 뉴스</strong>
            <div className="news">
                {news && news.map((item, idx) => {
                    return <div key={idx} onClick={() => onClickNews(item.url)}>
                        <img src={item.image}></img>
                        <p>{item.title}</p>
                        <p>등록시간 : {item.date}</p>
                    </div>
                })}
            </div>
        </>
    )
}

export default News;