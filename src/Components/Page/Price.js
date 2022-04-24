import React from "react";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";

const Title = styled("h1")({
    fontSize: "2.5rem",
    textAlign: "center",
});

const ListField = styled("div")({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: ".5rem",
});

const List = styled("ul")(({ theme }) => ({
    position: "relative",
    width: "100%",
    border: `1px solid ${theme.custom.primary.color}`,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& li": {
        padding: "1.5rem 0",
    },
    "& li:first-of-type": {
        width: "100%",
        backgroundColor: theme.custom.primary.color,
        textAlign: "center",
    },
    "& li:not(:first-of-type)": {
        width: "90%",
        display: "flex",
        justifyContent: "space-between",
        borderBottom: `1px solid ${theme.custom.primary.color}`,
    },
    "& li:last-of-type, li:first-of-type": {
        borderBottom: "unset",
    },
    "& small": {
        position: "absolute",
        fontSize: ".75rem",
        left: "0",
        bottom: "-1.5rem",
    },
}));

function Price() {
    return (
        <Container>
            <Title>價目表</Title>
            <ListField>
                {DUMMY_DATA.map((type, idx) => (
                    <List key={idx}>
                        <li>{type.type}</li>
                        {type.list.map((itm, idx) => (
                            <li key={idx}>
                                <p>{itm.title}</p>
                                <p>{itm.price}</p>
                            </li>
                        ))}
                        <small>{type.desc}</small>
                    </List>
                ))}
            </ListField>
        </Container>
    );
}

export default Price;

const DUMMY_DATA = [
    {
        type: "霧眉",
        list: [
            { title: "法式霧眉", price: 12000 },
            { title: "韓系霧眉", price: 8999 },
        ],
        desc: "※霧眉時間平均約3-4hrs / 補色1-2hrs",
    },
    {
        type: "紋唇",
        list: [
            { title: "女神自然裸唇", price: 8999 },
            { title: "女神自然裸唇", price: 8999 },
        ],
    },
    {
        type: "紋眼線",
        list: [
            { title: "內眼線", price: 8999 },
            { title: "內眼線", price: 8999 },
        ],
    },
];
