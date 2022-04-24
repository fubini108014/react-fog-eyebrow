import React from "react";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { routerConfig } from "../../Constants/routerSettings";
import Logo from "../../Asset/Icon/logo.svg";

const HeaderAppBar = styled(AppBar)({
    marginTop: "25px",
    height: "60px",
    background: "#B7E5E4",
    color: "#777777",
    gridArea: "header",
    position: "static",
    "& .headerToolbar": {
        minHeight: "60px",
    },
    "& .menuButton": {
        margin: "1px 5px",
        height: 58,
        width: 120,
        color: "#777777",
        fontSize: "18px",
        fontWeight: 400,
        borderRadius: "unset",
        "&:hover": {
            backgroundColor: "#fff",
            color: "#B7E5E4",
        },
    },
});

function Header() {
    let navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <HeaderAppBar>
            {/* <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/news">news</Link>
            </nav> */}
            <Container maxWidth="xl">
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
                                    onClick={handleCloseNavMenu}
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
                                onClick={() => navigate(page.path)}
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
                </Toolbar>
            </Container>
        </HeaderAppBar>
    );
}

export default Header;
