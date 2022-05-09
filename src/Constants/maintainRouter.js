import PhoneIcon from "@mui/icons-material/Phone";
import About from "../Maintain/Page/About";
import Banner from "../Maintain/Page/Banner";
import News from "../Maintain/Page/News";
import Portfolio from "../Maintain/Page/Portfolio";
import Question from "../Maintain/Page/Question";
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
        path: "question",
        element: <Question />,
        name: "常見問題",
        icon: <PhoneIcon />,
    },
];
