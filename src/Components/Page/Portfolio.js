import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { portfolioMenu } from "../../Constants/routerSettings";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CustomPointer from "../../Asset/Icon/arcticons_smartautoclicker.svg";

const Title = styled("div")({
    fontSize: "28px",
    textAlign: "center",
    margin: 20,
});
const PortfolioCardContainer = styled("div")(({ theme }) => ({
    display: "grid",
    gridAutoFlow: "row",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "300px",
    gap: "15px",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
}));

const PortfolioCard = styled("div")({
    width: "100%",
    height: "100%",
    background: "#C4C4C4",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    cursor: `url(${CustomPointer}), auto`,
    "& .cardTitle": {
        fontSize: "24px",
        margin: 6,
    },
    "& .cardDesc": { marginBottom: 10 },
});

const fakeData = {
    1: [
        { title: "法式霧眉", desc: "12000" },
        { title: "韓系霧眉", desc: "8999" },
        { title: "飄眉", desc: "12000" },
        { title: "霧加飄眉", desc: "6999" },
        { title: "補色", desc: "三個月內免費補唇一次" },
    ],
    2: [
        { title: "女神自然裸唇", desc: "8999" },
        { title: "歐美嘟嘟唇", desc: "6999" },
        { title: "水晶唇", desc: "5999" },
        { title: "補唇色", desc: "三個月內免費補唇一次" },
    ],
    3: [
        { title: "內眼線", desc: "8999" },
        { title: "外眼線", desc: "6999" },
        { title: "補色", desc: "三個月內免費補唇一次" },
    ],
};

function Portfolio() {
    let { type = 1 } = useParams();

    const portfolioType = useMemo(
        () => portfolioMenu.find((item) => String(item.value) === String(type)),
        [type]
    );

    return (
        <Container>
            <Title>{portfolioType.text}</Title>
            <PortfolioCardContainer>
                {fakeData[type].map((item) => (
                    <PortfolioCard>
                        <div className="cardTitle">{item.title}</div>
                        <div className="cardDesc">{item.desc}</div>
                    </PortfolioCard>
                ))}
            </PortfolioCardContainer>
        </Container>
    );
}

export default Portfolio;
