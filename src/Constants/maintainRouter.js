import PhoneIcon from "@mui/icons-material/Phone";
import About from "../Maintain/Page/About";
import Banner from "../Maintain/Page/Banner";
import News from "../Maintain/Page/News";
import Portfolio from "../Maintain/Page/Portfolio";
import Price from "../Maintain/Page/Price";
import Reserve from "../Maintain/Page/Reserve";

export const maintainRouterConfig = [
    { path: "about", element: <About />, name: "關於我", icon: <PhoneIcon /> },
    { path: "news", element: <News />, name: "最新消息", icon: <PhoneIcon /> },
    {
        path: "portfolio",
        element: <Portfolio />,
        name: "作品集",
        icon: <PhoneIcon />,
    },
    {
        path: "banner",
        element: <Banner />,
        name: "廣告管理",
        icon: <PhoneIcon />,
    },

    {
        path: "reserve",
        element: <Reserve />,
        name: "預約管理",
        icon: <PhoneIcon />,
    },

    {
        path: "price",
        element: <Price />,
        name: "價目表",
        icon: <PhoneIcon />,
    },
];
