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
                            {typeof itm.answer === "string"
                                ? itm.answer
                                : itm.answer?.map(
                                      (el) => <div>{el}</div> || ""
                                  )}
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
        answer: "您可以登入會員後、點右側立即預約即可線上預約，省去利用LINE、臉書及IG等老師回復的時間；或是您也能透過電話預約。我們的客服時間是周六及周日的早上10點到下午6點。",
        isOpen: false,
    },
    {
        id: 2,
        question: "不是會員如何修改預約時間?",
        answer: "由於會員才享有修改預約的服務，非會員無法在線上即時修改預約，您可以透過電話並在客服時間時取消預約。",
        isOpen: false,
    },
    {
        id: 3,
        question: "霧眉、紋眼線或紋唇會很痛嗎?",
        answer: "店內會在紋繡前先幫客戶敷上麻藥，藥效約20分鐘，加上Jamie老師輕柔的手法，全程只要放輕鬆睡完一覺 ( 約30P ~1小時 )，就能享有美麗的眉型 / 眼線 / 唇型喔!",
        isOpen: false,
    },
    {
        id: 4,
        question: "加入會員有什麼優惠?",
        answer: [
            "(1)加入會員享有一年內補色優惠價3500(原價5000元)",
            "(2)親朋好友一起來!好康道相報，立即推薦親友，(該親友)即享現折500優惠",
            "(3)當月壽星即享6折優惠",
        ],
        isOpen: false,
    },
];
