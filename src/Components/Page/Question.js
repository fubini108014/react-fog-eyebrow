import React, { useState, useEffect } from "react";
import Title from "../Typography/Title";
import { styled } from "@mui/material/styles";

import { Box, Container } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const DropDownList = styled("ul")({
    width: "100%",
});

const DropDownItem = styled("li")((props) => ({
    width: "100%",
    borderBottom: props.isactive ? "none" : "1px solid #c4c4c4",
}));

const AnswerField = styled("div")(({ theme }) => ({
    width: "100%",
    backgroundColor: theme.custom.primary.color3,
}));

function Question() {
    const [data, setData] = useState();

    useEffect(() => {
        setData(DUMMY_DATA);
    }, []);

    const openQuestionHandler = (itm) => {
        const newData = data.map((q) =>
            itm.id === q.id ? { ...q, isOpen: !q.isOpen } : q
        );
        setData(newData);
    };

    return (
        <Container>
            <Title>常見問題</Title>
            <DropDownList>
                {data?.map((itm, idx) => (
                    // isActive 寫法為何不行 ? 為何傳入的 Boolean 要加個 + 不然是接到 String ?
                    <DropDownItem key={idx} isactive={+itm.isOpen}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <h4>{`Q${idx + 1}. ${itm.question} `}</h4>
                            <ArrowForwardIosIcon
                                // 因為是 SVG 所以需要用 style
                                style={{
                                    transition: ".5s",
                                    transform: itm.isOpen
                                        ? "rotate(90deg)"
                                        : "rotate(0)",
                                }}
                                onClick={() => openQuestionHandler(itm)}
                                sx={{ cursor: "pointer" }}
                            />
                        </Box>
                        <AnswerField
                            className={
                                itm.isOpen ? "active-answer" : "close-answer"
                            }
                        >
                            {itm.answer}
                        </AnswerField>
                    </DropDownItem>
                ))}
            </DropDownList>
        </Container>
    );
}

export default Question;

const DUMMY_DATA = [
    {
        id: 1,
        question: "請問如何預約?",
        answer: "可以直接透過官網老師可預約時間表預約,也可以透過LINE、臉書、IG帳號預約;另外也可電話預約。",
        isOpen: false,
    },
    {
        id: 2,
        question: "不是會員如何修改預約時間?",
        answer: "不管是不是都沒得改。",
        isOpen: false,
    },
    {
        id: 3,
        question: "價格為什麼沒有一個確定的金額??",
        answer: "因為你值得",
        isOpen: false,
    },
    {
        id: 4,
        question: "加入會員有什麼優惠?",
        answer: "很多很多很多很多很多很多",
        isOpen: false,
    },
];
