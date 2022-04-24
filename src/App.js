import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { customTheme } from "./Constants/customTheme";
import { ThemeProvider, styled } from "@mui/material/styles";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Home from "./Components/Page/Home";
import News from "./Components/Page/News";
import Portfolio from "./Components/Page/Portfolio";
import Price from "./Components/Page/Price";
import About from "./Components/Page/About";
import Login from "./Components/Page/Login";
import Question from "./Components/Page/Question";

const PageLayout = styled("div")({
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: ` 'header' 'main' 'footer'`,
});

const Center = styled("div")({
    gridArea: "main",
    overflow: "auto",
    padding: "10px 5px 10px 5px",
});

function Layout() {
    return (
        <PageLayout>
            <Header />
            <Center>
                <Outlet />
            </Center>
            <Footer />
        </PageLayout>
    );
}

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="news" element={<News />} />
                        <Route path="portfolio" element={<Portfolio />} />
                        <Route path="price" element={<Price />} />
                        <Route path="about" element={<About />} />
                        <Route path="login" element={<Login />} />
                        <Route path="question" element={<Question />} />
                    </Route>
                    <Route path="*" element={<div>Page NotFound</div>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
