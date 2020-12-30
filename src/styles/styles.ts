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
} //객체 선언

export const Wrapper = styled.div`
position :relative;
width: ${(props: IStyle)=> (props.width ? props.width : null)};
height: ${(props: IStyle)=> (props.height ? props.height : null)};
margin: ${(props: IStyle)=> (props.margin ? props.margin : null)};
padding: ${(props: IStyle)=> (props.padding ? props.padding : null)};
display: ${(props: IStyle)=> (props.display ? props.display : null)};
align-items: ${(props: IStyle)=> (props.alignItems ? props.alignItems : null)};
background-color: ${(props: IStyle)=> (props.backgroundColor ? props.backgroundColor : null)};
justify-content: ${(props: IStyle)=> (props.justifyContent ? props.justifyContent : null)};
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

`;

export const Input = styled.input`
    width: ${(props: IStyle)=> (props.width ? props.width : null)};
    height: ${(props: IStyle)=> (props.height ? props.height : null)};
    margin: ${(props: IStyle)=> (props.margin ? props.margin : null)};
    padding: ${(props: IStyle)=> (props.padding ? props.padding : null)};
    outline-style: none;
    border: none; //border가 없음
`;

export const Button = styled.button`
width: ${(props: IStyle)=> (props.width ? props.width : null)};
    height: ${(props: IStyle)=> (props.height ? props.height : null)};
    margin: ${(props: IStyle)=> (props.margin ? props.margin : null)};
    padding: ${(props: IStyle)=> (props.padding ? props.padding : null)};
    background-color: ${(props: IStyle)=> (props.backgroundColor ? props.backgroundColor : null)};
    border-radius: ${(props: IStyle)=> (props.borderRadius ? props.borderRadius : null)};
    color: ${(props: IStyle)=> (props.color ? props.color : null)};
    outline-style: none;
    border: none; //border가 없음
`;
