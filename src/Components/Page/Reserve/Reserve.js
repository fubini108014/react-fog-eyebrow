import React, { useState, useRef, useEffect } from "react";
import { Container, TextField } from "@mui/material";
import Title from "../../Typography/Title";
import LipIcon from "../../../Asset/Icon/lip_icon.svg";
import EyeLinerIcon from "../../../Asset/Icon/eyeliner_icon.svg";
import EyeBrowIcon from "../../../Asset/Icon/eyebrow_icon.svg";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
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
    CustomPickersDay,
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
const today = new Date();
const disableWeekends = (day) => {
    return isWeekend(day);
    //return day.getDay() === 0 || day.getDay() === 6 || ;
};

const alreadyFullDate = [addDays(today, 12), addDays(today, 10)];

const renderWeekPickerDay = (date, selectedDates, pickersDayProps) => {
    let givenClassName = "";
    if (!pickersDayProps.disabled && !pickersDayProps.today) {
        givenClassName = alreadyFullDate.some((fullDay) =>
            isSameDay(fullDay, date)
        )
            ? "alreadyfullDays"
            : "notFullDays";
    }

    return <CustomPickersDay {...pickersDayProps} className={givenClassName} />;
};

function Reserve() {
    const [selection, setSelection] = useState({
        type: "",
        subType: "",
        dateTime: null,
        timeInterval: "",
    });
    const swiperRef = useRef(null);

    const handleClickTypeSelected = (value) => {
        //TODO: get new subType and rerender <ItemList/>
        setSelection({ ...selection, type: value, subType: "" });
    };

    const handleChangeDate = (newValue) => {
        //TODO: get new TimeInterval and rerender <TimeItem/>
        setSelection({ ...selection, dateTime: newValue, timeInterval: "" });
    };

    const handleChangeSubType = (dir) => {
        if (dir === "next") {
            swiperRef.current.swiper.slideNext();
        } else {
            swiperRef.current.swiper.slidePrev();
        }
        const getActiveIndex = swiperRef.current.swiper.activeIndex;

        setSelection({
            ...selection,
            subType:
                swiperRef.current.swiper.slides[getActiveIndex].dataset.value,
        });
    };

    const handleClickSubmit = () => {
        console.log("Submit!!!");
    };

    useEffect(() => {
        console.log("selection : ", selection);
    }, [selection]);
    return (
        <Container>
            <Title>立即預約</Title>
            <SubTitle>(1) 請先選項目</SubTitle>
            <ItemList>
                {itemSource.map((item, idx) => (
                    <Item
                        key={"ItemKey_" + idx}
                        active={selection.type === item.value}
                        onClick={() => handleClickTypeSelected(item.value)}
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
                            value={selection.dateTime}
                            onChange={handleChangeDate}
                            className="customStaticWrapper"
                            classes={{ root: "customMuiPicker" }}
                            views={["day"]}
                            minDate={today}
                            maxDate={addDays(today, 60)}
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
                            onClick={() => handleChangeSubType("prev")}
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
                            <SwiperSlide data-value="1">韓系霧眉</SwiperSlide>
                            <SwiperSlide data-value="2">法式霧眉</SwiperSlide>
                            <SwiperSlide data-value="3">傳統霧眉</SwiperSlide>
                        </Swiper>
                        <ArrowButton
                            onClick={() => handleChangeSubType("next")}
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

                    <SubmitButton onClick={handleClickSubmit}>
                        立即預約
                    </SubmitButton>
                </TimePickerWrapper>
            </TimeSection>
        </Container>
    );
}

export default Reserve;
