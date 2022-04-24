import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { routerConfig, portfolioMenu } from "../../Constants/routerSettings";
import Logo from "../../Asset/Icon/logo.svg";

const HeaderAppBar = styled(AppBar)(({ theme }) => ({
    marginTop: "25px",
    height: "60px",
    background: theme.custom.primary.color,
    color: theme.custom.secondary.color,
    gridArea: "header",
    position: "static",
    padding: "0 10px",
    "& .headerToolbar": {
        minHeight: "60px",
    },
    "& .menuButton": {
        margin: "1px 5px",
        height: 58,
        width: 120,
        color: theme.custom.secondary.color,
        fontSize: "18px",
        fontWeight: 400,
        borderRadius: "unset",
        "&:hover": {
            backgroundColor: "#fff",
            color: theme.custom.primary.color,
        },
    },
}));

const PortfolioMenu = styled(Menu)(({ theme }) => ({
    "& .menuPaper": {
        borderRadius: "unset",
    },
    "& .menuList": {
        background: theme.custom.primary.color,
        color: theme.custom.secondary.color,
        paddingTop: 0,
        paddingBottom: 0,

        "& .menuItem": {
            height: 50,
            border: `1px solid ${theme.custom.primary.color}`,
            "&:hover": {
                backgroundColor: "#fff",
                color: theme.custom.primary.color,
            },
        },
    },
}));

function Header() {
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElPortfolio, setAnchorElPortfolio] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleGoPage = (e, path) => {
        if (path.includes("portfolio")) {
            setAnchorElPortfolio(e.currentTarget);
        } else {
            navigate(path);
        }
    };
    const handleClosePortfolioMenu = () => {
        setAnchorElPortfolio(null);
    };
    return (
        <HeaderAppBar>
            <Toolbar disableGutters className="headerToolbar">
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        mr: 2,
                        display: {
                            xs: "none",
                            md: "flex",
                            backgroundImage: `url(${Logo})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            width: 100,
                            height: 50,
                        },
                    }}
                />

                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                    }}
                >
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: "block", md: "none" },
                        }}
                    >
                        {routerConfig.map((page) => (
                            <MenuItem
                                key={page.path}
                                onClick={() => {
                                    navigate(page.path);
                                    handleCloseNavMenu();
                                }}
                            >
                                <Typography textAlign="center">
                                    {page.name}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
                        backgroundImage: `url(${Logo})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        width: 100,
                        height: 50,
                    }}
                />
                <Box
                    sx={{
                        flexGrow: 1,
                        display: {
                            xs: "none",
                            md: "flex",
                            justifyContent: "flex-end",
                        },
                    }}
                >
                    {routerConfig.map((page) => (
                        <Button
                            key={page.path}
                            onClick={(e) => handleGoPage(e, page.path)}
                            className="menuButton"
                            sx={{
                                my: 2,
                                display: "block",
                            }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
                <PortfolioMenu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElPortfolio}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: "top",
                        horizontal: "right",
                    }}
                    open={Boolean(anchorElPortfolio)}
                    onClose={handleClosePortfolioMenu}
                    classes={{ list: "menuList", paper: "menuPaper" }}
                >
                    {portfolioMenu.map((type) => (
                        <MenuItem
                            key={`porKey_${type.value}`}
                            onClick={() => navigate(type.path)}
                            className={"menuItem"}
                        >
                            <Typography textAlign="center">
                                {type.text}
                            </Typography>
                        </MenuItem>
                    ))}
                </PortfolioMenu>
            </Toolbar>
        </HeaderAppBar>
    );
}

export default Header;
