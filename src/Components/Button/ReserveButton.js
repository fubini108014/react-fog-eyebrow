import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";

const ButtonWrapper = styled("div", {
    shouldForwardProp: (prop) => prop !== "show",
})(({ theme, show }) => ({
    width: "65px",
    height: "150px",
    fontSize: "22px",
    cursor: "pointer",
    position: "absolute",
    backgroundColor: theme.custom.primary.color2,
    color: theme.custom.secondary.color,
    top: 220,
    right: 0,
    letterSpacing: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    writingMode: "vertical-rl",
    textOrientation: "upright",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    visibility: show ? "initial" : "hidden",
    "&:hover": {
        backgroundColor: theme.custom.primary.color4,
        color: "#fff",
    },
}));

function ReserveButton() {
    let navigate = useNavigate();
    let location = useLocation();
    const showBtn = location.pathname !== "/reserve";

    return (
        <ButtonWrapper show={showBtn} onClick={() => navigate("reserve")}>
            立即預約
        </ButtonWrapper>
    );
}

export default ReserveButton;
