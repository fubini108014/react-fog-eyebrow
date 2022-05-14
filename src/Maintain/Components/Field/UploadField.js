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

    "& .fileName": { margin: 5, color: "#000" },
}));

export const UploadField = ({ text = "", inputRef, defaultFileName = "" }) => {
    const [fileName, setFileName] = useState(defaultFileName);

    const handleChangeFile = () => {
        const getLink = inputRef?.current?.files[0].name || "";
        setFileName(getLink);
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
                        />

                        {text}
                    </label>
                </Button>
            </div>

            <div className={"fileName"}>{fileName}</div>
        </UploadFieldWrapper>
    );
};
