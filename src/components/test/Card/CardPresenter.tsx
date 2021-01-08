import React from "react";
import { MuiPaper, useStyles } from "../../../pages/test/styles";
import { Box , Input } from "../../../styles/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import { Favorite } from "@material-ui/icons";

interface ICard {
    toggleLike: () => void;
    fill: boolean;
    handleText: (args: string) => void;
    text: string;
    onSubmit: () => void;
}

const CardPresenter = (props: ICard) => {
    const classes = useStyles();
    return (
        <MuiPaper className={classes.paper} elevation={3}>
            <Box className={classes.header}>
                <Box className={classes.avatar}></Box>
                <Box>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box className={classes.img_box}>
                <img 
                    style={{ width:"100%", height: 250}}
                    alt=""
                    src="/img/gg.jpg"/>
            </Box>
            <Box className={classes.btn_box}>
                <Box>
                    <IconButton onClick={props.toggleLike}>
                        {props.fill ? <Favorite style={{ fill: "red" }} /> : <FavoriteBorderIcon />}
                    </IconButton>
                    <IconButton>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                </Box>
                <Box>
                    <IconButton>
                        <TurnedInNotIcon />
                    </IconButton>
                </Box>
            </Box>
            <Box>
                <form 
                    onSubmit = {(e) => {
                        e.preventDefault(); //새로고침 방지
                        props.onSubmit();
                    }}
                >
                    <Input 
                        value={props.text} 
                        onChange={(e)=> props.handleText(e.target.value)} 
                    />
                </form>
            </Box>
        </MuiPaper>
    );
};
//comments.map하면 댓글이 다 달린다?
export default CardPresenter;