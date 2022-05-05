import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
    /*全域自定義Theme設定*/
    custom: {
        primary: {
            //主色
            color: "#B7E5E4", // 藍
            color2: "#FEDFE1", // 粉
            color3: "#FFF4F5", // 淺粉
            color4: "#DF4F4F", // 深紅
        },
        secondary: {
            //次要色
            color: "#777777",
            color2: "#92B7B6",
        },
        typography: {
            //字體顏色
            color: "#000",
            color2: "#777777",
            color3: "#b3b3b3",
            color4: "#DF4F4F",
        },
    },
    components: {
        MuiPickerStaticWrapper: {
            styleOverrides: {
                // Name of the slot
                root: {
                    // Some CSS
                    border: "1px solid #9B9B9B",
                    "& > div:first-of-type,& > div > div:first-of-type": {
                        width: "100%",
                    },
                    "& .PrivatePickersFadeTransitionGroup-root > div > div:first-of-type,& .PrivatePickersSlideTransition-root > div > div ":
                        {
                            justifyContent: "space-around",
                            "& button,& span": {
                                fontSize: "18px !important;",
                            },
                        },
                },
            },
        },
    },
});
