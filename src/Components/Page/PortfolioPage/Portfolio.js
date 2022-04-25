import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { portfolioMenu } from "../../../Constants/routerSettings";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import CustomPointer from "../../../Asset/Icon/arcticons_smartautoclicker.svg";

export const Title = styled("div")({
    fontSize: "28px",
    textAlign: "center",
    margin: 20,
});

export const PortfolioCardContainer = styled("div")(({ theme }) => ({
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

export const fakeData = [
    { title: "法式霧眉", desc: "12000", subType: "A", type: "1" },
    { title: "韓系霧眉", desc: "8999", subType: "B", type: "1" },
    { title: "飄眉", desc: "12000", subType: "C", type: "1" },
    { title: "霧加飄眉", desc: "6999", subType: "D", type: "1" },
    { title: "補色", desc: "三個月內免費補唇一次", subType: "E", type: "1" },
    { title: "女神自然裸唇", desc: "8999", subType: "F", type: "2" },
    { title: "歐美嘟嘟唇", desc: "6999", subType: "G", type: "2" },
    { title: "水晶唇", desc: "5999", subType: "H", type: "2" },
    { title: "補唇色", desc: "三個月內免費補唇一次", subType: "I", type: "2" },
    { title: "內眼線", desc: "8999", subType: "J", type: "3" },
    { title: "外眼線", desc: "6999", subType: "K", type: "3" },
    { title: "補色", desc: "三個月內免費補唇一次", subType: "L", type: "3" },
];

export function Portfolio() {
    let { type = 1 } = useParams();
    let navigate = useNavigate();
    const portfolioType = useMemo(
        () => portfolioMenu.find((item) => String(item.value) === String(type)),
        [type]
    );

    const portfolioList = useMemo(
        () => fakeData.filter((item) => String(item.type) === String(type)),
        [type]
    );

    return (
        <Container>
            <Title>{portfolioType.text}</Title>
            <PortfolioCardContainer>
                {portfolioList.map((item, idx) => (
                    <PortfolioCard
                        key={`Portkey_${idx}`}
                        onClick={() =>
                            navigate(`/portfolioCloset/${item.subType}`)
                        }
                    >
                        <div className="cardTitle">{item.title}</div>
                        <div className="cardDesc">{item.desc}</div>
                    </PortfolioCard>
                ))}
            </PortfolioCardContainer>
        </Container>
    );
}
