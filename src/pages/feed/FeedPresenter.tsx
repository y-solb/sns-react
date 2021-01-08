import React, { Fragment, MutableRefObject } from "react";
//import { img } from "../../imgData";
import FeedCard from "../../components/feed/FeedCard";
import { Overlay } from "../../styles/stylesFeed";

//스크롤은 전체 크기를 잡아주는게 중요함


//column은 세로정렬 row는 가로정렬
export interface IProps { //Container에서 넘겨주면 interface로 만들어줘야함 
    scrollEl: MutableRefObject<any>;
    handleScroll: () => void;
    count: number;
    loading: boolean;
}

const FeedPresenter: React.FC<IProps> = (props) => {
    return(
        <Fragment>
             {props.loading ? <Overlay /> : null}
            {<FeedCard{...props}/>}
        </Fragment>
    );
};


 {/* map 함수 => for이랑 같은 반복문 배열의 length만큼 반복해주는 함수 */}
                 {/*   {img.map((element,index) => { //element는 객체 하나 하나
                        if(index < props.count) {
                            return <ImgBox src={element.src} alt="" />;
                        }
                    })}
                */}


export default FeedPresenter;