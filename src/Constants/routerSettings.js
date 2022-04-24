import News from "../Components/Page/News";
import Portfolio from "../Components/Page/Portfolio";
import Price from "../Components/Page/Price";
import About from "../Components/Page/About";
import Login from "../Components/Page/Login";
import Question from "../Components/Page/Question";

export const routerConfig = [
    { path: "news", element: <News />, name: "最新消息" },
    { path: "portfolio/:type", element: <Portfolio />, name: "作品集" },
    { path: "price", element: <Price />, name: "價目表" },
    { path: "about", element: <About />, name: "關於我" },
    { path: "login", element: <Login />, name: "註冊｜登入" },
    { path: "question", element: <Question />, name: "常見問題" },
];

export const portfolioMenu = [
    { text: "霧眉", value: 1, path: "portfolio/1" },
    { text: "女神裸唇", value: 2, path: "portfolio/2" },
    { text: "紋眼線", value: 3, path: "portfolio/3" },
];