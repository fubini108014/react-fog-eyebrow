import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { customTheme } from "./Constants/customTheme";
import { ThemeProvider, styled } from "@mui/material/styles";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Home from "./Components/Page/Home";
import { routerConfig } from "./Constants/routerSettings";
import CssBaseline from "@mui/material/CssBaseline";

const PageLayout = styled("div")({
    minHeight: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto 1fr auto",
    gridTemplateAreas: ` 'header' 'main' 'footer'`,
});

const Center = styled("div")({
    gridArea: "main",
    overflow: "auto",
    padding: "32px 0 64px",
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
                    </Route>
                    <Route path="*" element={<div>Page NotFound</div>} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
