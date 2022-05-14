import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const UploadFieldWrapper = styled("div")(({ theme }) => ({
    margin: "10px 0px",
    alignItems: "center",
    color: theme.custom.typography.color5,
    display: "flex",
    "& .saveButton": {
        padding: 0,
        "& .uploadLabel": {
            padding: "6px 16px",
            cursor: "pointer",
            whiteSpace: "nowrap",
        },
    },

    "& .fileName": {
        margin: 5,
        color: "#000",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        maxWidth: "200px",
    },
}));

export const UploadField = ({
    text = "",
    inputRef,
    defaultFileName = "未上傳任何檔案",
    inputProps,
    inputOnChange,
}) => {
    const [fileName, setFileName] = useState(defaultFileName);

    const handleChangeFile = () => {
        const files = inputRef?.current?.files[0];
        const getLink = files.name || "";
        setFileName(getLink);
        inputOnChange(files);
    };

    return (
        <UploadFieldWrapper>
            <div className="uploadField">
                <Button variant="contained" className="saveButton">
                    <label htmlFor="upload-file" className="uploadLabel">
                        <input
                            style={{ display: "none" }}
                            id="upload-file"
                            name="upload-file"
                            type="file"
                            ref={inputRef}
                            onChange={handleChangeFile}
                            {...inputProps}
                        />

                        {text}
                    </label>
                </Button>
            </div>
            <div className="fileName">{fileName}</div>
        </UploadFieldWrapper>
    );
};
