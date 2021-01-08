import styled from "styled-components";

interface IStyle {
    width?:string;
    height?:string;
    margin?:string;
    padding?:string;
    display?:string;
    justifyContent?:string;
    alignItems?:string;
    backgroundColor?:string;
    border?:string;
    borderRadius?:string;
    flexDirection?: string; // 정렬
    color?:string;
    borderBottom?:string;
    marginLeft?:string;
    fontSize?:string;
    fontWeight?:string;
    alignSelf?:string;
    verticalAlign?:string;
} //객체 선언

export const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    padding: 25px 100px;
    overflow-y: scroll;
`;

export const Overlay = styled.div`
    position: absolute;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
`;



export const Card = styled.div`
    width: ${(props: IStyle)=> (props.width ? props.width : null)};
    height: ${(props: IStyle)=> (props.height ? props.height : null)};
    display: ${(props: IStyle)=> (props.display ? props.display : null)};
    flex-direction:${(props: IStyle)=> (props.flexDirection ? props.flexDirection : null)};
    background-color: ${(props: IStyle)=> (props.backgroundColor ? props.backgroundColor : null)};
    border: ${(props: IStyle)=> (props.border ? props.border : null)};
`;

export const Box = styled.div`
    width: ${(props: IStyle)=> (props.width ? props.width : null)};
    height: ${(props: IStyle)=> (props.height ? props.height : null)};
    margin: ${(props: IStyle)=> (props.margin ? props.margin : null)};
    padding: ${(props: IStyle)=> (props.padding ? props.padding : null)};
    display: ${(props: IStyle)=> (props.display ? props.display : null)};
    flex-direction:${(props: IStyle)=> (props.flexDirection ? props.flexDirection : null)};
    align-items: ${(props: IStyle)=> (props.alignItems ? props.alignItems : null)};
    background-color: ${(props: IStyle)=> (props.backgroundColor ? props.backgroundColor : null)};
    justify-content: ${(props: IStyle)=> (props.justifyContent ? props.justifyContent : null)};
    border: ${(props: IStyle)=> (props.border ? props.border : null)};
    border-radius: ${(props: IStyle)=> (props.borderRadius ? props.borderRadius : null)};
    border-bottom: ${(props: IStyle)=> (props.borderBottom ? props.borderBottom : null)};
`;


export const Txt = styled.text`
    width: ${(props: IStyle)=> (props.width ? props.width : null)};
    height: ${(props: IStyle)=> (props.height ? props.height : null)};
    margin: ${(props: IStyle)=> (props.margin ? props.margin : null)};
    padding: ${(props: IStyle)=> (props.padding ? props.padding : null)};
    margin-left: ${(props: IStyle)=> (props.marginLeft ? props.marginLeft : null)};
    font-size: ${(props: IStyle)=> (props.fontSize ? props.fontSize : null)};
    font-weight: ${(props: IStyle)=> (props.fontWeight ? props.fontWeight : null)};
    align-items: ${(props: IStyle)=> (props.alignItems ? props.alignItems : null)};
    align-self: ${(props: IStyle)=> (props.alignSelf ? props.alignSelf : null)};
    outline-style: none;
    border: none; 
`;

export const Button = styled.button`
width: ${(props: IStyle)=> (props.width ? props.width : null)};
    height: ${(props: IStyle)=> (props.height ? props.height : null)};
    margin: ${(props: IStyle)=> (props.margin ? props.margin : null)};
    padding: ${(props: IStyle)=> (props.padding ? props.padding : null)};
    background-color: #ffffff;
    border-radius: ${(props: IStyle)=> (props.borderRadius ? props.borderRadius : null)};
    color: ${(props: IStyle)=> (props.color ? props.color : null)};
    outline-style: none;
    border: none; 
`;
