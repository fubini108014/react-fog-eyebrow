import React from "react";
import Title from "../Components/Typography/Title";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import CampaignIcon from "@mui/icons-material/Campaign";
import { useNavigate } from "react-router-dom";

const QuickLinkWrapper = styled("div")(({ theme, show }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    columnGap: ".5rem",
    marginTop: "50px",
}));

const QuickButton = styled("div")(({ theme, show }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& .iconButton": {
        margin: 10,
        width: 120,
        height: 120,
        backgroundColor: theme.custom.primary.color2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        cursor: "pointer",
        "&:hover": { backgroundColor: theme.custom.primary.color3 },
        "& svg": {
            fontSize: "50px",
        },
    },
    "& .btnDesc": {
        fontSize: "18px",
    },
}));

const quickLinkConfig = [
    { text: "最新消息", icon: <CampaignIcon />, path: "news" },
    { text: "預約管理", icon: <CampaignIcon />, path: "reserve" },
    {
        text: "作品集",
        icon: <CampaignIcon />,
        path: "portfolio",
    },
];

function Home() {
    let navigate = useNavigate();
    return (
        <Container>
            <Title>Hi 管理員 您好</Title>
            <QuickLinkWrapper>
                {quickLinkConfig.map((item, idx) => (
                    <QuickButton key={idx}>
                        <div
                            className="iconButton"
                            onClick={() => navigate("/maintain/" + item.path)}
                        >
                            {item.icon}
                        </div>
                        <div className="btnDesc">{item.text}</div>
                    </QuickButton>
                ))}
            </QuickLinkWrapper>
        </Container>
    );
}

export default Home;
