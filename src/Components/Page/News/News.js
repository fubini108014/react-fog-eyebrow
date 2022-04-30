import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Title from "../../Typography/Title";
import { styled } from "@mui/material/styles";
import { Box, Container } from "@mui/material";

const NewsList = styled("ul")({
    width: "100%",
});

function News() {
    const [data, setData] = useState();

    useEffect(() => {
        setData(DUMMY_DATA);
    }, []);

    return (
        <Container>
            <Title>最新消息</Title>
            <NewsList>
                {data?.map((itm, idx) => (
                    <Link
                        to={itm.id}
                        key={idx}
                        style={{ color: "#000", cursor: "pointer" }}
                    >
                        <Box
                            sx={{
                                p: ".5rem 0",
                                borderBottom: "1px solid #c4c4c4",
                            }}
                        >{`${itm.date} ${itm.title}`}</Box>
                    </Link>
                ))}
            </NewsList>
        </Container>
    );
}

export default News;

const DUMMY_DATA = [
    {
        id: 1,
        title: "活動大優惠",
        date: "2020/04/26",
    },
    {
        id: 2,
        title: "現場會員9折優惠",
        date: "2020/04/20",
    },
];
