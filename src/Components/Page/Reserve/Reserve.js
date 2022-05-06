import React, { useState, useRef } from "react";
import { Box, Container, TextField } from "@mui/material";
import Title from "../../Typography/Title";
import LipIcon from "../../../Asset/Icon/lip_icon.svg";
import EyeLinerIcon from "../../../Asset/Icon/eyeliner_icon.svg";
import EyeBrowIcon from "../../../Asset/Icon/eyebrow_icon.svg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay, pickersDayClasses } from "@mui/x-date-pickers";
import { isWeekend, addDays, isSameDay } from "date-fns";
import locale from "date-fns/locale/zh-TW";
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
    CalendarRemark,
    GreenBox,
    RedBox,
} from "./ReserveUIComp";
import ArrowButton from "../../Button/ArrowButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const itemSource = [
    { text: "霧眉", value: "a", icon: EyeBrowIcon },
    { text: "紋唇", value: "b", icon: LipIcon },
    { text: "紋眼線", value: "c", icon: EyeLinerIcon },
];
const fakeTimeDataSource = [
    { text: "10:00 AM", value: "1" },
    { text: "15:00 PM", value: "2" },
];

const highlightedDays = [
    {
        //已額滿
        date: addDays(new Date(), 9),
        styles: {
            backgroundColor: "purple",
            color: "white",
        },
    },
    {
        //尚有時間
        date: addDays(new Date(), 12),
        styles: {
            color: "red",
            fontWeight: "bold",
            fontSize: 18,
            textDecoration: "underline",
        },
    },
];
const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    const matchedStyles = highlightedDays.reduce((a, v) => {
        return isSameDay(date, v.date) ? v.styles : a;
    }, {});

    return (
        <PickersDay
            {...pickersDayProps}
            sx={{
                ...matchedStyles,
                [`&&.${pickersDayClasses.selected}`]: {
                    backgroundColor: "green",
                },
            }}
        />
    );
};

function Reserve() {
    const [selection, setSelection] = useState({
        type: "",
        subType: "",
        dateTime: new Date("2014-08-18T21:11:54"),
        timeInterval: "",
    });
    const swiperRef = useRef(null);
    const [value, setValue] = React.useState(null);
    /*const handleClickTypeSelected = (value) => {};
    const handleChangeDate = (newValue) => {
        setSelection({ ...selection, dateTime: newValue });
    };*/

    const disableWeekends = (day) => {
        return isWeekend(day);
        //return day.getDay() === 0 || day.getDay() === 6 || ;
    };

    return (
        <Container>
            <Title>立即預約</Title>
            <SubTitle>(1) 請先選項目</SubTitle>
            <ItemList>
                {itemSource.map((item, idx) => (
                    <Item
                        key={"ItemKey_" + idx}
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
                    <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        locale={locale}
                    >
                        <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="day"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            className="customStaticWrapper"
                            classes={{ root: "customMuiPicker" }}
                            views={["day"]}
                            minDate={new Date()}
                            maxDate={addDays(new Date(), 60)}
                            // orientation="landscape"
                            renderInput={(params) => (
                                <TextField {...params} fullWidth />
                            )}
                            renderDay={renderWeekPickerDay}
                            shouldDisableDate={disableWeekends}
                        />
                    </LocalizationProvider>
                    <CalendarRemark>
                        <RedBox />
                        <div>已額滿</div>
                        <GreenBox />
                        <div>尚有時間</div>
                    </CalendarRemark>
                </DatePickerWrapper>
                <TimePickerWrapper>
                    <SubItemWrapper>
                        <ArrowButton
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                            direction="left"
                        />
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={5}
                            pagination={{
                                clickable: true,
                            }}
                            loop={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[Pagination]}
                            className="subItemSwiper"
                            ref={swiperRef}
                        >
                            <SwiperSlide>韓系霧眉</SwiperSlide>
                            <SwiperSlide>法式霧眉</SwiperSlide>
                            <SwiperSlide>傳統霧眉</SwiperSlide>
                        </Swiper>
                        <ArrowButton
                            onClick={() => swiperRef.current.swiper.slideNext()}
                            direction="right"
                        />
                    </SubItemWrapper>
                    <Remark>請選擇您要的預約時間</Remark>
                    {fakeTimeDataSource.map((item) => (
                        <TimeItem
                            key={`key_${item.value}`}
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
