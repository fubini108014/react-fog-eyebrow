import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextInputField from "../../Field/TextInputField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { isWeekend, addDays, isSameDay } from "date-fns";
import locale from "date-fns/locale/zh-TW";
import DoubleSelect from "./DoubleSelect";
import {
    DatePickerWrapper,
    CalendarRemark,
    GreenBox,
    CustomPickersDay,
    RedBox,
} from "../../../../Components/Page/Reserve/ReserveUIComp";

const NewsDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: "12px",
    background: "#f1f1f1",
}));

const NewsDialogTitle = styled(DialogTitle)(({ theme }) => ({
    background: "#f1f1f1",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
}));

const NewsDialogActions = styled(DialogActions)(({ theme }) => ({
    background: "#f1f1f1",
    "& .saveBtn": {
        backgroundColor: "#576b6a",
        margin: "5px",
        letterSpacing: "10px",
        textIndent: "10px",
        textAlign: "center",
        "&:hover": {
            backgroundColor: theme.custom.primary.color5,
        },
    },
}));

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

function ReserveEditorDialog({
    defaultData = { name: "安安", mail: "aaa@gmail.com", phone: "09111111z" },
    open = false,
    onClose = () => {},
    onSave = () => {},
}) {
    const [tmpReserveData, setTmpReserveData] = useState(defaultData);
    const [selection, setSelection] = useState({
        type: "",
        subType: "",
        dateTime: null,
        timeInterval: "",
    });
    const handleChangeDate = (newValue) => {
        //TODO: get new TimeInterval and rerender <TimeItem/>
        setSelection({ ...selection, dateTime: newValue, timeInterval: "" });
    };
    const handleChangeName = (event) => {
        setTmpReserveData((prev) => ({
            ...prev,
            name: event.target.value,
        }));
    };
    const handleSave = () => {
        const postData = {
            ...tmpReserveData,
        };
        onSave(postData);
    };

    return (
        <Dialog
            open={open}
            onClose={onClose}
            scroll="paper"
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
            classes={{ paper: "paperDialog" }}
            sx={{
                "& .paperDialog": {
                    width: { xs: "100%", lg: 550 },
                },
            }}
        >
            <NewsDialogTitle id="scroll-dialog-title">
                客戶預約維護
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </NewsDialogTitle>
            <NewsDialogContent
                dividers={true}
                classes={{ dividers: "contentDividers" }}
            >
                預約項目
                <DoubleSelect />
                預約時間
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
                <TextInputField
                    text="姓 名"
                    fullWidth={true}
                    defaultValue={defaultData.title}
                    onChange={handleChangeName}
                    placeholder="請輸入姓名"
                />
                <TextInputField
                    text="連絡電話"
                    fullWidth={true}
                    defaultValue={defaultData.phone}
                    textFieldProps={{
                        InputProps: {
                            readOnly: true,
                        },
                    }}
                />
                <TextInputField
                    text="E-mail"
                    fullWidth={true}
                    defaultValue={defaultData.mail}
                    textFieldProps={{
                        InputProps: {
                            readOnly: true,
                        },
                    }}
                />
            </NewsDialogContent>
            <NewsDialogActions>
                <Button
                    className="saveBtn"
                    onClick={handleSave}
                    variant="contained"
                >
                    {true ? "儲存" : "新增"}
                </Button>
            </NewsDialogActions>
        </Dialog>
    );
}

export default ReserveEditorDialog;
