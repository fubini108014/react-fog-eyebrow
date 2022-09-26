import React from "react";
import Container from "@mui/material/Container";
import Headshot from "../../Asset/Image/headshot.png";
import Title from "../Typography/Title";
import { styled } from "@mui/material/styles";

const Content = styled("div")(({ theme }) => ({
    display: "flex",
    [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
    },
}));

const IndentDiv = styled("div")({
    marginLeft: "48px",
});
const IndentDiv2 = styled("div")({
    marginLeft: "80px",
});

const HeadshotPicture = styled("img")({
    width: "300px",
    height: "356px",
    background: `url(${Headshot})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
});

const Introduction = styled("div")(({ theme }) => ({
    flex: 1,
    padding: "0px 20px",
    [theme.breakpoints.down("sm")]: {
        marginTop: "10px",
    },
}));

function About() {
    return (
        <Container>
            <Title>關於我</Title>
            <Content>
                <HeadshotPicture />
                <Introduction>
                    Hi !
                    我是Jamie老師，本身從事化妝保養品牌以及護膚服務多年，想幫助客戶們無懼素顏
                    、 感受美麗的每一天。
                    <br />
                    每天只服務2個客人，提供更頂級的VIP紋繡服務。
                    <br />
                    <br />
                    經歷：化妝品保養專櫃人員11年經歷
                    <IndentDiv>美容美體護膚人員8年經歷</IndentDiv>
                    <IndentDiv>紋繡1年經歷</IndentDiv>
                    <br />
                    專業證書：英國TQUK國際證書
                    <IndentDiv2>國家級丙級執照</IndentDiv2>
                    <IndentDiv2>中華民國美容師協會證書</IndentDiv2>
                    <IndentDiv2>中華民國美容協會飄眉師證書</IndentDiv2>
                    <IndentDiv2>中華民國美容協會紋唇證書</IndentDiv2>
                    <IndentDiv2>中華民國美容協會紋眼線證書</IndentDiv2>
                </Introduction>
            </Content>
        </Container>
    );
}

export default About;
