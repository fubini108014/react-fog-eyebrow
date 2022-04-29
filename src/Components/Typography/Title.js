import React from "react";
import { styled } from "@mui/material/styles";

const PageTitle = styled("h1")({
    fontSize: "2.5rem",
    textAlign: "center",
});

function Title({ children = null }) {
    return <PageTitle>{children}</PageTitle>;
}

export default Title;
