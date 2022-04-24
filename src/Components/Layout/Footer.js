import React from "react";
import { styled } from "@mui/material/styles";

const FooterContainer = styled("div")({
    height: "120px",
    background: "#B7E5E4",
    color: "#777777",
    gridArea: "footer",
});

function Footer() {
    return <FooterContainer>Footer</FooterContainer>;
}

export default Footer;
