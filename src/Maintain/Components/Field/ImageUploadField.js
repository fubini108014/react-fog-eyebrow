import React, { useEffect, useState, useRef } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const UploadFieldContainer = styled("div")(({ theme }) => ({
    flexDirection: "column",
    margin: "10px 0 5px 0",
    [theme.breakpoints.up("sm")]: {
        display: "flex",
    },
    "& .uploadField": {
        margin: "3px 0",
        display: "flex",
        alignItems: "center",
        lineHeight: "16px",
        "& .uploadLabel": {
            margin: "0 5px",
            cursor: "pointer",
            "&:hover svg": {
                color: "rgb(49 64 132 / 87%)",
            },
        },
    },

    "& .bannerUploadField": {
        margin: "3px 0",
        display: "flex",
        alignItems: "center",
        lineHeight: "16px",
        width: "100%",
        border: "1px dashed #c2c2c2",
        borderRadius: "3px",
        position: "relative",
        "&:hover": {
            border: "1px dashed #686868",
            "& img": {
                opacity: 0.3,
            },
        },
        "& .bannerUploadLabel": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5px",
            cursor: "pointer",
            width: "100%",
            height: 160,
            zIndex: 1,
            color: "#9e9e9e",
            "& .hasImage": {
                color: "transparent",
            },
            "&:hover": {
                color: "rgb(49 64 132 / 87%)",
                "& .hasImage,& svg": {
                    color: "rgb(49 64 132 / 87%)",
                },
            },
        },
        "& img": {
            position: "absolute",
        },
    },
    "& .uploadPath": {
        flex: 1,
        "& .textField": {
            "& .MuiOutlinedInput-root": {
                background: "#fff",
                boxShadow: "inset 0px 0px 4px 0px #9f9f9f85",
                "& input": {
                    padding: "9px 6px",
                },
            },
        },
        "& .Mui-disabled": {
            color: "rgb(0 0 0 / 76%)",
        },
    },
}));

function ImageUploadField({
    defaultFile = "",
    onChange = () => {},
    fieldName = "imageUpload",
}) {
    const fileInputRef = useRef(null);
    const [imageInfo, setImageInfo] = useState({
        src: "#",
        filePath: "",
        files: null,
    });

    useEffect(() => {
        if (!!defaultFile) {
            if (typeof defaultFile === "string") {
                setImageInfo({
                    filePath: defaultFile,
                    src: `../Images/${defaultFile}`,
                    files: null,
                });
            }
        }
    }, [defaultFile]);

    const handleChangeFile = () => {
        if (!!fileInputRef && !!fileInputRef.current) {
            const getCurrentFile = fileInputRef.current.files?.[0];
            if (!!getCurrentFile) {
                if (getCurrentFile.size > 2097152) {
                    alert("File is too big!");
                    return;
                }
                const getLink = getCurrentFile.name || "";
                const newImageInfo = {
                    filePath: getLink,
                    files: getCurrentFile,
                    src: URL.createObjectURL(getCurrentFile),
                };
                onChange(newImageInfo);
                setImageInfo(newImageInfo);
            }
        }
    };

    return (
        <UploadFieldContainer>
            <div className="bannerUploadField">
                <label htmlFor={fieldName} className="bannerUploadLabel">
                    <CloudUploadIcon
                        className={!!imageInfo.filePath ? "hasImage" : ""}
                    />
                    <span className={!!imageInfo.filePath ? "hasImage" : ""}>
                        請上傳圖檔
                    </span>
                    <input
                        style={{ display: "none" }}
                        id={fieldName}
                        name={fieldName}
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleChangeFile}
                    />
                </label>
                {imageInfo.src !== "#" && (
                    <img
                        id="blah"
                        src={imageInfo.src}
                        alt="my banner"
                        style={{ height: "100%", width: "100%" }}
                    />
                )}
            </div>
        </UploadFieldContainer>
    );
}

export default ImageUploadField;
