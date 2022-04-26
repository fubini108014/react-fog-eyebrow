import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LineIcon from "../../Asset/Icon/line_icon.svg";
import FBIcon from "../../Asset/Icon/facebook_icon.svg";
import IGIcon from "../../Asset/Icon/instagram_icon.svg";

const FooterContainer = styled("div")(({ theme }) => ({
    width: "100%",
    height: "250px",
    padding: "25px 5%",
    background: theme.custom.primary.color,
    color: theme.custom.secondary.color,
    gridArea: "footer",
    display: "flex",
    alignItems: "center",
    flexDirection: {
        xs: "column",
        md: "row",
    },
}));

const InfoList = styled("ul")(({ theme }) => ({
    color: theme.custom.secondary.color,
    lineHeight: "2",
    alignSelf: "flex-end",
    "& li": {
        whiteSpace: "nowrap",
    },
}));

const googleMapStyle = {
    border: "none",
    width: "388px",
    height: "200px",
};

function Footer() {
    return (
        <FooterContainer>
            <Box
                sx={{
                    flex: "6",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px",
                    flexDirection: {
                        xs: "column",
                        md: "row",
                    },
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.002890183707!2d121.5623502150063!3d25.03397598397251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abb63987eacb%3A0x7cf919c84632e976!2z5Y-w5YyX5LiW55WM6LK_5piT5Lit5b-DIOWxleimveWkp-aokyAo5LiW6LK_5LiA6aSoKQ!5e0!3m2!1szh-TW!2stw!4v1650818882613!5m2!1szh-TW!2stw"
                    style={googleMapStyle}
                    title="map"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <InfoList>
                    <li>美眉設計</li>
                    <li>電話：09XX-XXX-XXX</li>
                    <li>地址：高雄市楠梓區XX路XX巷XX號</li>
                    <li>營業時間：星期一～星期六 10:00-13:00</li>
                </InfoList>
            </Box>
            <Box
                sx={{
                    flex: "4",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "24px",
                }}
            >
                <a
                    href="https://mui.com/zh/material-ui/react-box/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={LineIcon} alt="no" />
                </a>
                <a
                    href="https://mui.com/zh/material-ui/react-box/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={FBIcon} alt="no" />
                </a>
                <a
                    href="https://mui.com/zh/material-ui/react-box/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={IGIcon} alt="no" />
                </a>
            </Box>
        </FooterContainer>
    );
}

export default Footer;
