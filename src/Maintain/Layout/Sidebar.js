import React from "react";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Logo from "../../Asset/Icon/logo.svg";
import Typography from "@mui/material/Typography";
import { useNavigate, useLocation } from "react-router-dom";
import { maintainRouterConfig } from "../../Constants/maintainRouter";

const SidebarNav = styled("div")(({ theme }) => ({
    height: "100%",
    minWidth: 200,
    backgroundColor: theme.custom.primary.color,
}));

const CustomTab = styled(Tab)(({ theme }) => ({
    justifyContent: "flex-start",
    padding: "12px 30px",
}));

function Sidebar() {
    let navigate = useNavigate();
    let location = useLocation();

    const defaultTabIdx = maintainRouterConfig.findIndex(
        (item) => location.pathname.indexOf("/" + item.path) > -1
    );

    const [value, setValue] = React.useState(
        maintainRouterConfig[defaultTabIdx !== -1 ? defaultTabIdx : 0]["path"]
    );

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate("/maintain/" + newValue);
    };

    return (
        <SidebarNav>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                    m: "10px auto",
                    display: {
                        md: "flex",
                        backgroundImage: `url(${Logo})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: 100,
                        height: 50,
                        cursor: "pointer",
                    },
                }}
                onClick={() => navigate("/maintain")}
            />
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: "divider" }}
            >
                {maintainRouterConfig.map((page, idx) => (
                    <CustomTab
                        key={idx}
                        label={page.name}
                        value={page.path}
                        icon={page.icon}
                        iconPosition="start"
                    />
                ))}
            </Tabs>
        </SidebarNav>
    );
}

export default Sidebar;
