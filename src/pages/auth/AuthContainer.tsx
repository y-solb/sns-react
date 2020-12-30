import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { LOGIN } from "../../graphql/auth";
import { LOCAL_LOGIN } from "../../graphql/auth";
import { JOIN } from "../../graphql/auth";
import { useSnackbar } from "notistack";


export const LOGIN_ACTION = "LOGIN_ACTION";
export const JOIN_ACTION = "JOIN_ACTION";



/*Container는 state를 다루거나 여러가지 이벤트 로직들을 담는 부분 */

const AuthContainer = () => {
    const { enqueueSnackbar } = useSnackbar();

    const [form, setForm] = useState(LOGIN_ACTION); ////로그인 & 회원가입 State 변경으로 입력 Form 변경

    // state 변경 -> state 대입이 되는게 아니라 대체가 됨
    // ...spread 연산자 기존에 유저 데이터를 복사해둠

    const [userData, setUserData] = useState({ //[로그인 state 데이터, setUserData는 userData를 바꾸는 setState 라는 리액트 함수임]
        studentId:"",
        password:"",
    });

    const [joinData,setJoinData] = useState({
        studentId:"",
        password:"",
        firstName:"",
        lastName:"",
    });

    const [loginMutation] = useMutation(LOGIN); //auth.ts -> LOGIN이 인자로 들어감
    const [localLoginMutation] = useMutation(LOCAL_LOGIN);
    const [joinMutation,{ data }] = useMutation(JOIN);

    const onSubmit = async(e:any, action:string) => { //form에서 내부적으로 처리해야할 데이터가 있을경우 처리
       e.preventDefault(); //form 태그를 쓰면 onSubmit할때 새로고침이 됨 -> 새로고침 방지

        //서버와 클라이언트가 통신을 하려면 async await(비동기통신)

       switch (action) {
        case LOGIN_ACTION:{
            try{
                const {
                    data:{login : token }, //token이라는 별칭을 만들어줌
                 } = await loginMutation({ //서버와 통신하는 부분
                  variables:{
                    studentId: userData.studentId,
                    password: userData.password,
                },
            });
            if(token) {
                localStorage.setItem("ACCESS_TOKEN", token); //토큰을 localStorage에 저장
                await localLoginMutation({
                    variables:{
                        token :token,
                    },
                });
                enqueueSnackbar("안녕하세요.", { variant: "success" });
            } else {
                localStorage.removeItem("ACCESS_TOKEN"); //실패시 기존의 토큰을 삭제
                enqueueSnackbar("다시 로그인 해주세요.", { variant: "error" })
                }
            } catch(e) {
                localStorage.removeItem("ACCESS_TOKEN");
                enqueueSnackbar("다시 로그인 해주세요.", { variant: "error" })
            }
            break;
        }
        case JOIN_ACTION:{
            try{
                await joinMutation({ //서버와 통신하는 부분
                  variables:{
                    studentId: joinData.studentId,
                    password: joinData.password,
                    firstName: joinData.firstName,
                    lastName: joinData.lastName,
                    },
                });
                console.log(joinData);
            }catch(e) {
                console.log(e);
            }
            break;
        }
    }
};


    return (
        <AuthPresenter 
            userData={userData} //Props
            setUserData={setUserData} 
            onSubmit={onSubmit}
            form={form}
            setForm={setForm}
            joinData={joinData}
            setJoinData={setJoinData}
        />
    );
};

export default AuthContainer;
