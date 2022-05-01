import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

export const IButton = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "direction",
})(({ theme, direction }) => ({
    background: theme.custom.primary.color,
    transform: direction === "right" ? "rotateY(180deg)" : "rotateY(0deg)",
    "&:hover": {
        background:
            "linear-gradient(0deg, rgba(0 ,0, 0, 0.2), rgba(0, 0, 0, 0.2)), #B7E6E4",
    },
}));

function ArrowButton({
    direction = "left",
    onClick = () => {},
    className = "",
}) {
    return (
        <IButton onClick={onClick} direction={direction} className={className}>
            <ArrowBackIosNewIcon sx={{ fontSize: 28 }} />
        </IButton>
    );
}

export default ArrowButton;
