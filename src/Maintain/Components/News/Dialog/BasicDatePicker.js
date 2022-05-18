import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import locale from "date-fns/locale/zh-TW";

export default function BasicDatePicker({
    label = "",
    onChange = () => {},
    value = "",
}) {
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={locale}>
            <DatePicker
                label={label}
                value={value || null}
                onChange={onChange}
                mask="____/__/__"
                inputFormat="yyyy/MM/dd"
                renderInput={(params) => (
                    <TextField {...params} className="datepickerField" />
                )}
            />
        </LocalizationProvider>
    );
}
