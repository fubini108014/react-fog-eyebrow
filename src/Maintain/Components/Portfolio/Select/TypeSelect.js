import React, { useState } from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function TypeSelect({ options = [], onChange = () => {}, defaultValue = "" }) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (event) => {
        setValue(event.target.value);
        onChange(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    onChange={handleChange}
                >
                    {options.map((item, idx) => (
                        <MenuItem value={item.value} key={idx}>
                            {item.text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default TypeSelect;
