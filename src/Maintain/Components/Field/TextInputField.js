import React from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const TextFieldBox = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "baseline",
    margin: "10px 0",
    "& .textField": {
        flex: 1,
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        "& .MuiOutlinedInput-root": {
            background: "#fff",
            boxShadow: "inset 0px 0px 4px 0px #9f9f9f85",
            "& input": {
                padding: "9px 6px",
            },
        },
        "& .MuiOutlinedInput-multiline ": {
            padding: "9px 6px",
        },
    },
}));

export default function TextInputField({
    text = "",
    fullWidth = false,
    defaultValue = "",
    placeholder = "",
    onChange = () => {},
    textFieldProps = {},
}) {
    return (
        <TextFieldBox>
            <span style={{ whiteSpace: "nowrap" }}>{text}</span>
            <TextField
                fullWidth={fullWidth}
                variant="outlined"
                defaultValue={defaultValue}
                placeholder={placeholder}
                className="textField"
                onChange={onChange}
                {...textFieldProps}
            />
        </TextFieldBox>
    );
}
