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
    gridTemplateColumns: "55% 45%",
    gridAutoRows: "400px",
    gap: "15px",
    [theme.breakpoints.down("sm")]: {
        gridTemplateColumns: "repeat(1, 1fr)",
    },
}));
export const DatePickerWrapper = styled("div")(({ theme }) => ({}));
export const TimePickerWrapper = styled("div")(({ theme }) => ({}));

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
}));
