import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { PortfolioCardContainer, fakeData } from "./Portfolio";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import CameraIcon from "../../../Asset/Icon/photo-camera.svg";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Title from "../../Typography/Title";

const ClosetCard = styled("div")({
    width: "100%",
    height: "100%",
    background: "#C4C4C4",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    position: "relative",
    "& .cardTitle": {
        fontSize: "28px",
        margin: 6,
    },
    "& .searchBtn": {
        background: "#fff",
        position: "absolute",
        top: 10,
        right: 10,
        transform: "rotateY(180deg)",
        "&:hover": {
            backgroundColor: "rgba(255, 255, 255, .54)",
        },
    },
});
const GoBackButton = styled("div")(({ theme }) => ({
    width: "120px",
    height: "35px",
    fontSize: "16px",
    cursor: "pointer",
    position: "absolute",
    backgroundColor: theme.custom.primary.color3,
    borderRadius: 25,
    color: "#777777",
    top: 5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& span": {
        border: "solid black",
        borderWidth: "0px 1.8px 1.8px 0",
        display: "inline-block",
        padding: 4,
        marginRight: 5,
        transform: "rotate(135deg)",
    },
    "&:hover": {
        backgroundColor: theme.custom.primary.color2,
    },
}));
const PictureDialog = styled(Dialog)({
    "& .closeBtn": {
        position: "absolute",
        right: 0,
        top: 0,
    },
    "& .portfolioImage": {
        width: "60vw",
        height: "70vh",
        background: `url(${CameraIcon})`,
        backgroundRepeat: "no-repeat !important",
        backgroundSize: "50px 50px !important",
        backgroundPosition: "center !important",
    },
});

const fakeDataList = [
    { title: "作品A", type: "A" },
    { title: "作品B", type: "B" },
    { title: "作品C", type: "C" },
    { title: "作品D", type: "D" },
    { title: "作品E", type: "E" },
    { title: "作品F", type: "E" },
];

function PortfolioCloset() {
    let { subType } = useParams();
    let navigate = useNavigate();
    const getPortfolioItem = useMemo(
        () => fakeData.find((item) => String(item.subType) === String(subType)),
        [subType]
    );
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container style={{ position: "relative" }}>
            <GoBackButton onClick={() => navigate(-1)}>
                <span />
                回上一頁
            </GoBackButton>
            <Title>{getPortfolioItem.title}</Title>
            <PortfolioCardContainer>
                {fakeDataList.map((item, idx) => (
                    <ClosetCard key={`PortCloset_key_${idx}`}>
                        <IconButton
                            aria-label="search"
                            onClick={handleClickOpen}
                            className="searchBtn"
                        >
                            <SearchIcon sx={{ fontSize: 28 }} />
                        </IconButton>
                        <div className="cardTitle">{item.title}</div>
                    </ClosetCard>
                ))}
            </PortfolioCardContainer>
            <PictureDialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xl"
                classes={{ paper: "dialogPaper" }}
            >
                <DialogContent>
                    <div className="portfolioImage"></div>

                    <IconButton
                        aria-label="delete"
                        onClick={handleClose}
                        className="closeBtn"
                    >
                        <CloseIcon sx={{ fontSize: 40 }} />
                    </IconButton>
                </DialogContent>
            </PictureDialog>
        </Container>
    );
}

export default PortfolioCloset;
