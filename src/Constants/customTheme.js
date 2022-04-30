import { createTheme } from "@mui/material/styles";

export const customTheme = createTheme({
    /*全域自定義Theme設定*/
    custom: {
        primary: {
            color: "#B7E5E4", // 藍
            color2: "#FEDFE1", // 粉
            color3: "#FFF4F5", // 淺粉
        },
        secondary: {
            color: "#777777",
        },
    },
});
