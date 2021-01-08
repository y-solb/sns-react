import React from "react";
import CardContainer from  "../../components/test/Card/CardContainer";
import { MuiContainer } from "./styles";
import { img } from "../../imgData";
 
const TestPresenter = () => {

    return(
    <MuiContainer>
      {img.map((e)=> {
        return <CardContainer/>;
      })}
    </MuiContainer>
    );
};


export default TestPresenter;