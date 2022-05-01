import React, { useState } from "react";
import Container from "@mui/material/Container";
import Title from "../../Typography/Title";
import TextField from "@mui/material/TextField";
import LipIcon from "../../../Asset/Icon/lip_icon.svg";
import EyeLinerIcon from "../../../Asset/Icon/eyeliner_icon.svg";
import EyeBrowIcon from "../../../Asset/Icon/eyebrow_icon.svg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import {
    SubTitle,
    ItemList,
    Item,
    TimeSection,
    DatePickerWrapper,
    TimePickerWrapper,
    SubmitButton,
    Remark,
    TimeItem,
    SubItemWrapper,
} from "./ReserveUIComp";
import ArrowButton from "../../Button/ArrowButton";

const itemSource = [
    { text: "霧眉", value: "a", icon: EyeBrowIcon },
    { text: "紋唇", value: "b", icon: LipIcon },
    { text: "紋眼線", value: "c", icon: EyeLinerIcon },
];
const fakeTimeDataSource = [
    { text: "10:00 AM", value: "1" },
    { text: "15:00 PM", value: "2" },
];

function Reserve() {
    const [selection, setSelection] = useState({
        type: "",
        subType: "",
        dateTime: new Date("2014-08-18T21:11:54"),
        timeInterval: "",
    });

    const handleClickTypeSelected = (value) => {};
    const [value, setValue] = React.useState(null);
    const handleChangeDate = (newValue) => {
        setSelection({ ...selection, dateTime: newValue });
    };

    const disableWeekends = (day) => {
        return day.getDay() === 0 || day.getDay() === 6;
    };

    return (
        <Container>
            <Title>立即預約</Title>
            <SubTitle>(1) 請先選項目</SubTitle>
            <ItemList>
                {itemSource.map((item) => (
                    <Item
                        active={selection.type === item.value}
                        onClick={() =>
                            setSelection({ ...selection, type: item.value })
                        }
                    >
                        <img
                            src={item.icon}
                            alt="no"
                            style={{ marginRight: 20 }}
                        />
                        {item.text}
                    </Item>
                ))}
            </ItemList>
            <SubTitle>(2) 選擇時間和小項目</SubTitle>
            <TimeSection>
                <DatePickerWrapper>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            shouldDisableDate={disableWeekends}
                        />
                    </LocalizationProvider>
                </DatePickerWrapper>
                <TimePickerWrapper>
                    <SubItemWrapper>
                        <ArrowButton onClick={() => {}} direction="left" />
                        {"韓系霧眉 法式霧眉 傳統霧眉"}
                        <ArrowButton onClick={() => {}} direction="right" />
                    </SubItemWrapper>
                    <Remark>請選擇您要的預約時間</Remark>
                    {fakeTimeDataSource.map((item) => (
                        <TimeItem
                            active={selection.timeInterval === item.value}
                            onClick={() =>
                                setSelection({
                                    ...selection,
                                    timeInterval: item.value,
                                })
                            }
                        >
                            {item.text}
                        </TimeItem>
                    ))}

                    <SubmitButton>立即預約</SubmitButton>
                </TimePickerWrapper>
            </TimeSection>
        </Container>
    );
}

export default Reserve;
