import { styled } from "@mui/material/styles";
export const SubTitle = styled("div")(({ theme }) => ({
    fontSize: 30,
}));

export const ItemList = styled("div")(({ theme }) => ({
    display: "grid",
    gridAutoFlow: "row",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridAutoRows: "140px",
    gap: "15px",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(2, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
    margin: "10px 0px 30px",
}));

export const Item = styled("div", {
    shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
    backgroundColor: active
        ? theme.custom.primary.color2
        : theme.custom.primary.color3,
    cursor: "pointer",
    fontSize: 28,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}));

export const TimeSection = styled("div")(({ theme }) => ({
    display: "grid",
    gridAutoFlow: "row",
    gridTemplateColumns: "55% calc(45% - 15px)",
    gridTemplateRows: "auto",
    gap: "15px",
    margin: "10px 0px 30px",
    [theme.breakpoints.down("md")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
}));

export const DatePickerWrapper = styled("div")(({ theme }) => ({
    minWidth: 320,
    position: "relative",
    "& .customMuiPicker ": {
        width: "100%",
        "& > div:first-of-type": {
            backgroundColor: theme.custom.primary.color,
            position: "relative",
            marginTop: 6,
            marginRight: 6,
            marginLeft: 6,
            paddingLeft: 16,
            paddingRight: 16,
            minHeight: 40,
            maxHeight: 40,
            "& > div:first-of-type": {
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "20px",
            },
            "& > div:nth-of-type(2)": {
                width: "100%",
                justifyContent: "space-between",
            },
        },
    },
}));

export const TimePickerWrapper = styled("div")(({ theme }) => ({
    minWidth: 320,
}));

export const CalendarRemark = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    position: "absolute",
    bottom: "15px",
    left: "30px",
}));

export const RedBox = styled("div")(({ theme }) => ({
    width: 30,
    height: 15,
    borderRadius: "5px",
    marginRight: "5px",
    backgroundColor: theme.custom.primary.color2,
}));

export const GreenBox = styled("div")(({ theme }) => ({
    width: 30,
    height: 15,
    borderRadius: "5px",
    marginLeft: "15px",
    marginRight: "5px",
    backgroundColor: theme.custom.primary.color,
}));

export const Remark = styled("div")(({ theme }) => ({
    width: "100%",
    textAlign: "center",
    color: theme.custom.typography.color4,
}));

export const SubItemWrapper = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    margin: "10px",
    justifyContent: "space-between",
    alignItems: "center",

    "& .subItemSwiper": {
        userSelect: "none",
        "& .swiper-slide": {
            textAlign: "center",
            margin: "auto",
        },
        "& .swiper-slide-next": {
            fontSize: 28,
        },
    },
    [theme.breakpoints.down("md")]: {
        margin: "0px",
        "& .subItemSwiper": {
            "& .swiper-slide": {
                fontSize: 16,
            },
            "& .swiper-slide-next": {
                fontSize: 24,
            },
        },
    },
    [theme.breakpoints.down("sm")]: {
        "& .subItemSwiper": {
            "& .swiper-slide": {
                fontSize: 14,
            },
            "& .swiper-slide-next": {
                fontSize: 20,
            },
        },
    },
}));

export const TimeItem = styled("div", {
    shouldForwardProp: (prop) => prop !== "active",
})(({ theme, active }) => ({
    width: "100%",
    height: "60px",
    border: `1px solid ${theme.custom.secondary.color2}`,
    borderRadius: "20px",
    background: active
        ? "linear-gradient(0deg, rgba(0 ,0, 0, 0.2), rgba(0, 0, 0, 0.2)), #B7E6E4"
        : "transparent",
    color: active ? "#fff" : theme.custom.typography.color2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "3px",
    margin: "25px 10px",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
        margin: "15px 0px",
    },
}));

export const SubmitButton = styled("div")(({ theme }) => ({
    width: "100%",
    height: "60px",
    border: `1px solid ${theme.custom.secondary.color2}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    letterSpacing: "8px",
    margin: "30px 10px 20px",
    cursor: "pointer",
    color: theme.custom.typography.color2,
    "&:hover": {
        background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #B7E6E4",
        color: "#fff",
    },
    [theme.breakpoints.down("md")]: {
        margin: "20px 0px",
    },
}));
