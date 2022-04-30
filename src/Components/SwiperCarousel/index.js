// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import styles from "./index.module.sass";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const DUMMY_IMG = [
    "https://images.unsplash.com/photo-1525797958722-0b6be58a1665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    "https://images.unsplash.com/photo-1530707114297-4af4b3cafe16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
    "https://images.unsplash.com/photo-1530898564308-d1ae7bb8bfec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
];

function SwiperCarousel() {
    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            className={styles.swiper}
            modules={[Navigation]}
            navigation
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
        >
            {DUMMY_IMG.map((itm, idx) => (
                <SwiperSlide className={styles["swiper-slide"]} key={idx}>
                    <img src={itm} alt="" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default SwiperCarousel;
