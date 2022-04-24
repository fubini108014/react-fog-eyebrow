import React from "react";
import { styled } from "@mui/material/styles";

const HeaderContainer = styled("div")({
    marginTop: "20px",
    height: "50px",
    background: "#B7E5E4",
    color: "#777777",
    gridArea: "header",
});

function Header() {
    return <HeaderContainer>Header</HeaderContainer>;
}

export default Header;
