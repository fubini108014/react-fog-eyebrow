import React from "react";
import { Routes, Route, Outlet, useNavigate, Navigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Sidebar from "./Layout/Sidebar";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Logout from "./Page/Logout";
import { maintainRouterConfig } from "../Constants/maintainRouter";
import { AuthProvider } from "./Auth/AuthProvider";
import { RequireAuth } from "./Auth/RequireAuth";

const PageLayout = styled("div")({
    height: "100vh",
    display: "flex",
});

const Main = styled("div")({
    height: "100%",
    overflow: "auto",
    flex: 1,
});
const LogoutButton = styled("button")({
    position: "fixed",
    right: 10,
    top: 10,
});

function MaintainLayout() {
    let navigate = useNavigate();

    return (
        <PageLayout>
            <Sidebar />

            <Main>
                <LogoutButton onClick={() => navigate("/maintain/logout")}>
                    登出
                </LogoutButton>
                <Outlet />
            </Main>
        </PageLayout>
    );
}

function MaintainApp() {
    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<MaintainLayout />}>
                    <Route
                        index
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    {maintainRouterConfig.map((route) => (
                        <Route
                            path={route.path}
                            key={route.path}
                            element={<RequireAuth>{route.element}</RequireAuth>}
                        />
                    ))}
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
        </AuthProvider>
    );
}

export default MaintainApp;
