import React from "react";
import { IProps } from "../../pages/feed/FeedPresenter";
import { Wrapper, Card, Box, Txt, Button } from "../../styles/stylesFeed";

const FeedCard = (props:IProps) => {
    return (
            <Wrapper 
                id="wrapper"
                ref={props.scrollEl} //ref : getElementById와 비슷(DOM을 직접 선택하는)
            >
                    <Card
                        display={"flex"}
                        width={"602px"}
                        height={"660.8px"}
                        flexDirection={"column"}
                        backgroundColor={"#ffffff"}
                        border={"2px solid rgba(var(--ce3,239,239,239),1)"}
                    >
                        <Box //상단 부분
                            display={"flex"}
                            width={"600px"}
                            height={"60px"}
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                            padding={"16px 16px 16px 16px"}
                            borderBottom = {"1px solid rgba(var(--ce3,239,239,239),1)"}
                        >
                            <Box //유저이미지/이름
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <img src={ "/img/1111.jpg" } alt="" 
                                    style={{width: "32px", height: "32px"}}/>
                                <Txt
                                    width={"500px"}
                                    height={"40px"}
                                    marginLeft={"12px"}
                                    padding={"10px 0px 10px 0px"}
                                    fontSize={"14px"}
                                    fontWeight={"bold"}
                                >user name</Txt>
                            </Box>
                            <Box //더보기
                                display={"flex"}
                                alignItems={"center"}
                            >
                                <Button
                                    width={"30px"}
                                    height={"30px"}
                                 >       
                                    <img src={ "/img/more.png" } alt="" 
                                        style={{width: "30px", height: "30px", padding: "8px"}}/>
                                </Button>
                            </Box>
                       </Box>
                 
                        <Box //pst 이미지 부분
                            display={"flex"}
                            width={"600px"}
                            height={"100%"}
                            backgroundColor={"#ffe366"}
                        />

                        <Box //하단 부분
                            display={"flex"}
                            width={"600px"}
                            height={"100%"}
                            flexDirection={"column"}
                        >
                            <Box  //하단 버튼
                                display={"flex"}
                                flexDirection={"row"}
                                width={"600px"}
                                height={"40px"}
                                justifyContent={"space-between"}
                            >
                                <Box //버튼 3개
                                    display={"flex"}
                                    padding={"0px 16px"}
                                    flexDirection={"row"}
                                    //margin-top: 4px;
                                >
                                        <Button
                                            width={"40px"}
                                            height={"40px"}
                                            padding={"8px"}
                                            //border: none;
                                            //background:none;
                                        >
                                            <img src={ "/img/ic_favorite.png" } alt="" 
                                                style={{position: "relative", width: "24px", height: "24px" }} />
                                        </Button>
                                        <Button
                                            width={"40px"}
                                            height={"40px"}
                                            padding={"8px"}
                                        >
                                            <img src={ "/img/ic_chat.png" } alt="" 
                                                style={{position: "relative", width: "24px", height: "24px" }}/>
                                        </Button>
                                        <Button
                                            width={"40px"}
                                            height={"40px"}
                                            padding={"8px"}
                                        >
                                            <img src={ "/img/ic_share.png" } alt="" 
                                                style={{position: "relative", width: "24px", height: "24px" }}/>
                                        </Button>
                                </Box>
                                <Box //북마크
                                    display={"flex"}
                                    padding={"0px 16px"}
                                    flexDirection={"row"}
                                    //border: none;
                                    //background:none;
                                >
                                        <Button 
                                            width={"40px"}
                                            height={"40px"}
                                            padding={"8px"}
                                        >
                                            <img src={ "/img/ic_bookmark.png" } alt="" 
                                                style={{position: "relative", width: "24px", height: "24px" }}/>
                                        </Button>
                                </Box>
                            </Box>
                            <Box 
                                display={"flex"}
                                flexDirection={"row"}
                            >
                                <Txt
                                    fontSize={"14px"}
                                    fontWeight={"bold"}
                                    padding={"0 16px"}

                                >좋아요 0개</Txt>
                            </Box>
                            <Box
                                display={"inline"}
                                flexDirection={"row"}
                                padding={"0 16px"}
                            >
                                <Txt
                                    alignSelf= {"left"}
                                    fontSize={"14px"}
                                    fontWeight={"bold"}
                                    padding={"5px"}
                                    marginLeft={"-5px"}
                                >user name</Txt>
                                <Txt 
                                    fontSize={"14px"}
                                    fontWeight={"normal"}
                                    marginLeft={"5px"}
                                >ㄴㄱㅇㄴㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ</Txt>
                            </Box>
                        </Box>
                    </Card>
                    {/* map 함수 => for이랑 같은 반복문 배열의 length만큼 반복해주는 함수 */}
                 {/*   {img.map((element,index) => { //element는 객체 하나 하나
                        if(index < props.count) {
                            return <ImgBox src={element.src} alt="" />;
                        }
                    })}
                */}
      
            </Wrapper>
    );
};

export default FeedCard;