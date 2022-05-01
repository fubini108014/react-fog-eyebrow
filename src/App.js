import {
    BrowserRouter,
    Routes,
    Route,
    Outlet,
    Navigate,
} from "react-router-dom";
import { customTheme } from "./Constants/customTheme";
import { ThemeProvider, styled } from "@mui/material/styles";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Home from "./Components/Page/Home";
import { routerConfig } from "./Constants/routerSettings";
import CssBaseline from "@mui/material/CssBaseline";
import PortfolioCloset from "./Components/Page/PortfolioPage/PortfolioCloset";
import Reserve from "./Components/Page/Reserve/Reserve";

const PageLayout = styled("div")({
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: ` 'header' 'main' `,
});

const Center = styled("div")({
    padding: "32px 0px",
    minHeight: "calc(100vh - 335px)",
});

const Main = styled("div")({
    gridArea: "main",
    overflow: "auto",
});

function Layout() {
    return (
        <PageLayout>
            <Main>
                <Header />
                <Center>
                    <Outlet />
                </Center>
                <Footer />
            </Main>
        </PageLayout>
    );
}

function App() {
    return (
        <ThemeProvider theme={customTheme}>
            <CssBaseline />
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        {routerConfig.map((page) => (
                            <Route
                                key={page.path}
                                path={page.path}
                                element={page.element}
                            />
                        ))}
                        <Route
                            path="portfolioCloset/:subType"
                            element={<PortfolioCloset />}
                        />
                        <Route path="reserve" element={<Reserve />} />
                    </Route>
                    <Route path="/404" element={<div>Page NotFound</div>} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
