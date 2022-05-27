import React, { useState, useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const options = [
    {
        mainType: "霧眉",
        value: "1",
        child: [
            { subType: "A", text: "法式霧眉" },
            { subType: "B", text: "韓系霧眉" },
            { subType: "C", text: "飄眉" },
            { subType: "D", text: "霧加飄眉" },
            { subType: "E", text: "補色" },
        ],
    },
    {
        mainType: "女神裸唇",
        value: "2",
        child: [
            { subType: "F", text: "女神自然裸唇" },
            { subType: "G", text: "歐美嘟嘟唇" },
            { subType: "H", text: "水晶唇" },
            { subType: "I", text: "補唇色" },
        ],
    },
    {
        mainType: "紋眼線",
        value: "3",
        child: [
            { subType: "J", text: "內眼線" },
            { subType: "K", text: "外眼線" },
            { subType: "L", text: "補色" },
        ],
    },
];
const DoubleSelectContainer = styled("div")(({ theme }) => ({
    "& .selectFormControl": {
        flexDirection: "row",
        "& #demo-simple-select,& #demo-simple-select2": {
            background: "#fff",
        },
        "& .selectText": {
            margin: 5,
            flex: 1,
        },
    },
}));

function DoubleSelect({
    defaultValue = { main: "1", sub: "A" },
    onChange = () => {},
}) {
    const [value, setValue] = useState(defaultValue);

    const getSubOptions = useMemo(() => {
        const find =
            options.find((item) => item.value === value.main) || options[0];
        return find.child;
    }, [value.main]);

    const handleChange = (event) => {
        const find = options.find((item) => item.value === event.target.value);

        const newValue = {
            main: event.target.value,
            sub: find.child[0].subType,
        };
        onChange(newValue);
        setValue(newValue);
    };

    const handleChangeSubType = (event) => {
        const newValue = { ...value, sub: event.target.value };
        onChange(newValue);
        setValue(newValue);
    };

    return (
        <DoubleSelectContainer>
            <FormControl fullWidth className="selectFormControl">
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value.main}
                    className="selectText"
                    onChange={handleChange}
                >
                    {options.map((item, idx) => (
                        <MenuItem value={item.value} key={idx}>
                            {item.mainType}
                        </MenuItem>
                    ))}
                </Select>
                <Select
                    labelId="demo-simple-select-label2"
                    id="demo-simple-select2"
                    value={value.sub}
                    className="selectText"
                    onChange={handleChangeSubType}
                >
                    {getSubOptions.map((item, idx) => (
                        <MenuItem value={item.subType} key={idx}>
                            {item.text}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </DoubleSelectContainer>
    );
}

export default DoubleSelect;
