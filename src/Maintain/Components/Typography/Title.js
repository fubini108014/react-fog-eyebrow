import React from "react";
import { styled } from "@mui/material/styles";

const PageTitle = styled("h1")(({ theme }) => ({
    fontSize: "28px",
    textAlign: "center",
    color: theme.custom.typography.color5,
}));

function Title({ children = null }) {
    return <PageTitle>{children}</PageTitle>;
}

export default Title;
