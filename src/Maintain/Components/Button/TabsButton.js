import React, { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export const TabsButton = ({
    options = [],
    onClickType = () => {},
    defaultValue = "",
    className = "",
    buttonGroupProps = {},
    buttonProps = {},
}) => {
    const [value, setValue] = useState(defaultValue || options[0]?.value || "");

    const handleChange = (event, newValue) => {
        setValue(newValue);
        onClickType(newValue);
    };

    return (
        <ToggleButtonGroup
            className={`type-options ${className}`}
            value={value}
            //fullWidth
            {...buttonGroupProps}
        >
            {options.map((elem, idx) => (
                <ToggleButton
                    className={elem.value === value ? "on" : "off"}
                    key={`${elem.value}_${idx}`}
                    value={elem.value}
                    onClick={handleChange}
                    disableFocusRipple
                    disableRipple
                    {...buttonProps}
                >
                    {elem.text}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
};
