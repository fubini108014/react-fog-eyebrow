import React from "react";

import { Rating, Typography, Box } from "@mui/material";

export default function CustomerFeedbackCard() {
    return (
        <Box
            sx={{
                border: "1px solid",
                borderColor: "color3",
                borderRadius: "10px",
                maxWidth: "288px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "6px",
                p: "12px",
            }}
        >
            <Box
                sx={{
                    width: "60%",
                    aspectRatio: "1/1",
                    borderRadius: "99rem",
                    overflow: "hidden",
                }}
            >
                <img src="https://picsum.photos/200/300?grayscale" />
            </Box>
            <Rating name="read-only" value={3} readOnly />
            <Typography>某某某</Typography>
            <Typography>
                青草湖大哥賺錢醫藥沒有忍不住平時先進媒體說明好多，為主字體大連模擬禮物妹妹表現人生重量遊客一項學歷不多，網址生產，解決而且線上治理當地本月一是名字，確定大家後果全體不去點擊居住跟我，精靈熱門總統驅動不知投資者婦女沒什麼追求藥品，出來檢索南方戰爭留言板，公。
            </Typography>
        </Box>
    );
}
