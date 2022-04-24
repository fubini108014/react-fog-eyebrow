import React from "react";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

const HeaderContainer = styled("div")({
    marginTop: "20px",
    height: "50px",
    background: "#B7E5E4",
    color: "#777777",
    gridArea: "header",
});

function Header() {
    return (
        <HeaderContainer>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/news">news</Link>
            </nav>
        </HeaderContainer>
    );
}

export default Header;
