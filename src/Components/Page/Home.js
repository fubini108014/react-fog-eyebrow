import React from "react";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import SwiperCarousel from "../SwiperCarousel";
import { Container, Box, Typography } from "@mui/material";
import CustomerFeedbackCard from "../HomeCompo/CustomerFeedbackCard";

import pic1 from "../../Asset/Image/Home/Rectangle1.png";
import pic2 from "../../Asset/Image/Home/Rectangle2.png";
import pic3 from "../../Asset/Image/Home/Rectangle3.png";

const workData = [
    {
        type: "法式霧眉",
        imgUrl: pic1,
    },
    {
        type: "女神裸唇",
        imgUrl: pic2,
    },
    {
        type: "紋眼線",
        imgUrl: pic3,
    },
];

function Home() {
    return (
        <Container>
            <SwiperCarousel />
            <iframe
                src="https://www.youtube.com/embed/cuYkp5B8Lkw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", aspectRatio: "12/5" }}
            ></iframe>
            <Typography align="center">精選作品</Typography>
            <Box
                sx={{
                    display: "flex",
                    maxWidth: "100%",
                    gap: "16px",
                }}
            >
                {workData.map((itm, idx) => (
                    <Box
                        as={Link}
                        to={"/About"}
                        key={idx}
                        sx={{
                            position: "relative",
                            width: "100%",
                            aspectRatio: "1/1",
                        }}
                    >
                        <img
                            src={itm.imgUrl}
                            style={{ position: "absolute", width: "100%" }}
                        />
                        <Typography
                            sx={{
                                position: "absolute",
                                bottom: "0",
                                left: "0",
                                width: "100%",
                                display: "grid",
                                placeItems: "center",
                                height: "15%",
                                backgroundColor: "color",
                                opacity: ".8",
                            }}
                        >
                            {itm.type}
                        </Typography>
                    </Box>
                ))}
            </Box>
            <Typography align="center">顧客分享</Typography>
            <Box>
                <CustomerFeedbackCard />
            </Box>
        </Container>
    );
}

export default Home;
