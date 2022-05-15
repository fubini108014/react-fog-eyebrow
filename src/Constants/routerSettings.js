import News from "../Components/Page/News/News";
import NewsDetail from "../Components/Page/News/NewsDetail";
import { Portfolio } from "../Components/Page/PortfolioPage/Portfolio";
import Price from "../Components/Page/Price";
import About from "../Components/Page/About";
import Login from "../Components/Page/Login";
import Question from "../Components/Page/Question";
import PortfolioCloset from "../Components/Page/PortfolioPage/PortfolioCloset";
import Reserve from "../Components/Page/Reserve/Reserve";

export const routerConfig = [
    {
        path: "news",
        element: <News />,
        name: "最新消息",
        isMain: true,
    },
    {
        path: "news/detail/:newsId",
        element: <NewsDetail />,
        name: "新消息內頁",
        isMain: false,
    },
    {
        path: "portfolio/:type",
        element: <Portfolio />,
        name: "作品集",
        isMain: true,
    },
    {
        path: "portfolioCloset/:subType",
        element: <PortfolioCloset />,
        name: "作品集內頁",
        isMain: false,
    },
    { path: "price", element: <Price />, name: "價目表", isMain: true },
    { path: "about", element: <About />, name: "關於我", isMain: true },
    { path: "login", element: <Login />, name: "註冊｜登入", isMain: true },
    { path: "question", element: <Question />, name: "常見問題", isMain: true },
    { path: "reserve", element: <Reserve />, name: "預約", isMain: false },
];

export const portfolioMenu = [
    { text: "霧眉", value: 1, path: "portfolio/1" },
    { text: "女神裸唇", value: 2, path: "portfolio/2" },
    { text: "紋眼線", value: 3, path: "portfolio/3" },
];
