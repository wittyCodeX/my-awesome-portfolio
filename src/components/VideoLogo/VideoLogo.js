import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NameImg from "../../assets/images/name.png";

const VideoLogo = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper} {...props}>
            <img src = {
                NameImg
            }
            alt = "Jonathan Brown"
            className = {
                classes.avatarImg
            }
            />
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        overflow:"hidden",
        position: "relative",
        width: "400px",
        height: "68px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "53px",
        },
    },
    avatarImg: {
        width: "400px",
        height: "65px",
    },
    mask: {
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "300px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "52px",
        },
    },
    video: {
        zIndex: 0,
        position: "absolute",
        top: 0,
        left: "1px",
        right: "1px",
        width: "298px",
        height: "68px",
        [theme.breakpoints.down("xs")]: {
            width: "228px",
            height: "52px",
        },
    },
}));

export default VideoLogo;
