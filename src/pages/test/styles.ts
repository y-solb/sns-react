import { makeStyles, Theme, createStyles, Container,Paper } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles((theme : Theme) => createStyles({
    paper: {
        display:"flex",
        flexDirection:"column",
        width: 300,
        height: 400,
        },
        img_box:{
            borderBottom:"1px solid #eee",
            height: 250,
            width: "100%",
        },
        header: {
            display: "flex",
            alignItems: "center",
            justifyContent:"space-between",
            height: 60,
            width:"100%",
            padding: 9,
            borderBottom:"1px solid #eee",
        },
        btn_box: {
            display: "flex",
            justifyContent: "space-between",
            borderBottom:"1px solid #eee",
        },
        avatar: {
            height: 30,
            width:30,
            borderRadius:"70%",
            border:"1px solid #000",
        },
    })
);

export const MuiContainer = styled(Container)`
    height: 100vh;
    flex-direction: column;
    align-items: center;
`;

export const MuiPaper = styled(Paper)``;
//음영