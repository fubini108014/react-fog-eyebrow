import React from "react";
import SwiperCarousel from "../SwiperCarousel";
import { Container } from "@mui/material";

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
        </Container>
    );
}

export default Home;
