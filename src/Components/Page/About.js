import React from "react";
import Container from "@mui/material/Container";
import Headshot from "../../Asset/Image/headshot.png";
import Title from "../Typography/Title";
import { styled } from "@mui/material/styles";

const Content = styled("div")({
    display: "flex",
});

const HeadshotPicture = styled("img")({
    width: "300px",
    height: "356px",
    background: `url(${Headshot})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
});

const Introduction = styled("div")({ flex: 1, padding: "0px 20px" });

function About() {
    return (
        <Container>
            <Title>關於我</Title>
            <Content>
                <HeadshotPicture />
                <Introduction>
                    Hi ! 我是蔡佩彤 <br />
                    <br />
                    經歷：高雄巨蛋嬌蘭專櫃人員
                    <br />
                    <br />
                    專業證書：
                </Introduction>
            </Content>
        </Container>
    );
}

export default About;
