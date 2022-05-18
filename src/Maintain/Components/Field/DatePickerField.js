import React from "react";
import { styled } from "@mui/material/styles";
import { TextField } from "@mui/material";

const DatePickerFieldContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "baseline",
    margin: "8px 0",
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
    "& .multiTextField": {
        "& .MuiInputBase-multiline": {
            background: "#fff",
            boxShadow: "inset 0px 0px 4px 0px #9f9f9f85",
            padding: "9px 6px",
        },
    },
    "& .Mui-disabled": {
        color: "rgb(0 0 0 / 76%)",
    },
}));

export function DatePickerField({
    text = "",
    onChange = () => {},
    inputRef = null,
    defaultValue = "",
    disabled = false,
}) {
    return (
        <DatePickerFieldContainer>
            <span style={{ whiteSpace: "nowrap" }}>{text}</span>
            <TextField
                disabled={disabled}
                inputRef={inputRef}
                label=""
                type="date"
                variant="outlined"
                defaultValue={defaultValue}
                className="textField"
                onChange={onChange}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </DatePickerFieldContainer>
    );
}
