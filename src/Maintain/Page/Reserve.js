import React, { useState } from "react";
import Title from "../Components/Typography/Title";
import Container from "@mui/material/Container";
import { TabsButton } from "../Components/Button/TabsButton";
import ReserveTable from "../Components/Reserve/Table/ReserveTable";
import { format } from "date-fns";
import { isoDateFormat } from "../Components/Portfolio/Table/tableConfig";
import ReserveEditorDialog from "../Components/Reserve/Dialog/ReserveEditorDialog";

const fakeDataSource = [
    {
        id: "1111111",
        mainType: "霧眉",
        subType: "法式霧眉",
        appointmentDate: "2022-02-05",
        appointmentPeriod: "10:00AM",
        name: "高麗菜",
        phone: "0955-232-188",
        mail: "123V@gmail.com",
    },
    {
        id: "222222222",
        mainType: "紋唇",
        subType: "女神自然裸唇",
        appointmentDate: "2022-01-05",
        appointmentPeriod: "15:00AM",
        name: "曾開馨",
        phone: "0955-232-188",
        mail: "123V@gmail.com",
    },
];
const defaultReserveData = {
    id: "",
    mainType: "",
    subType: "",
    appointmentDate: format(new Date(), isoDateFormat),
    appointmentPeriod: "",
    name: "",
    phone: "",
    mail: "",
};

function Reserve() {
    const [type, setType] = useState("1");
    const [data, setData] = useState(fakeDataSource);

    const [dialogInfo, setDialogInfo] = useState({
        reserveData: defaultReserveData,
        open: false,
    });

    const handleDialogClose = () => {
        setDialogInfo((prev) => ({ ...dialogInfo, open: false }));
    };

    const handleSubmit = (payload) => {
        if (!!payload.id) {
            //更新
            const updateIdx = data.findIndex((item) => item.id === payload.id);
            const newDataSource = [...data];
            newDataSource[updateIdx] = payload;
            setData(newDataSource);
        } else {
            //新增
            setData([...data, { ...payload, id: String(Math.random()) }]);
        }
        setDialogInfo((prev) => ({ ...dialogInfo, open: false }));
    };

    const handleOnDelete = (id) => {
        const newDataSource = [...data].filter((item) => item.id !== id);
        setData(newDataSource);
    };

    const handleDialogAdd = () => {
        setDialogInfo({ reserveData: defaultReserveData, open: true });
    };

    const handleDialogUpdate = (id) => {
        setDialogInfo({
            reserveData: data.find((item) => item.id === id),
            open: true,
        });
    };

    return (
        <Container>
            <Title>預約管理</Title>
            <TabsButton
                options={[
                    { text: "預約查詢", value: "1" },
                    { text: "月曆管理", value: "2" },
                ]}
                onClickType={(value) => {
                    setType(value);
                }}
            />
            <div>
                {type === "1" && (
                    <ReserveTable
                        dataSouce={data}
                        onDelete={handleOnDelete}
                        onAdd={handleDialogAdd}
                        onEdit={handleDialogUpdate}
                    />
                )}
                {type === "2" && <>月曆管理</>}
            </div>
            {dialogInfo.open && (
                <ReserveEditorDialog
                    open={dialogInfo.open}
                    reserveData={dialogInfo.reserveData}
                    onClose={handleDialogClose}
                    onSave={handleSubmit}
                />
            )}
        </Container>
    );
}

export default Reserve;
