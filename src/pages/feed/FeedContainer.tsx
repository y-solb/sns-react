import React, { useRef, useState, useEffect } from "react";
import FeedPresenter from "./FeedPresenter";

const FeedContainer = () => {
    const scrollEl = useRef(null);
    const [count, setCount] = useState<number>(12);
    const [loading, setLoading] = useState(false);

    const handleTimer = () => { //loading 다루는 함수
        setTimeout(() =>{
            setCount(count + 4);
            setLoading(false);
        }, 1000); //1000이면 1초, 1초 뒤에 setCount실행
    };

    const handleScroll = () => {
        const { scrollHeight, scrollTop, clientHeight }: any = scrollEl.current;

        console.log(
            "scrollHeight:", //전체 높이
            scrollHeight,
            "scrollTop:", //이미 스크롤되어 올라간 높이
            scrollTop,
            "clientHeight:", //현재 눈에 보이는 영역의 높이
            clientHeight
        );
        if(scrollTop + clientHeight >= scrollHeight - 20) { //바닥에 닿을 경우
            setLoading(true); //로딩 시작
            handleTimer();
        }
    };


    useEffect(() => {
        document.getElementById("wrapper").addEventListener("scroll", handleScroll); //EventListener는 removeEventListener가 꼭 필요

        return () => {
            document.getElementById("wrapper").removeEventListener("scroll", handleScroll);
        }
    }); // React 반 자바스크립트 반


    return(
         <FeedPresenter 
            scrollEl={scrollEl} 
            handleScroll={handleScroll} 
            count={count}
            loading={loading}
        />);
};

export default FeedContainer;