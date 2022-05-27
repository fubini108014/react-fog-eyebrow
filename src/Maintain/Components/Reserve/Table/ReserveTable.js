import React from "react";
import MaterialTable from "@material-table/core";
import {
    MaterialTableConfig,
    isoDateFormat,
} from "../../Portfolio/Table/tableConfig";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import { format } from "date-fns";

const { localization, defaultOption } = MaterialTableConfig;

function ReserveTable({
    dataSouce = [],
    onDelete = () => {},
    onAdd = () => {},
    onEdit = () => {},
    isLoading = false,
}) {
    const genColumns = () => [
        {
            title: "大項目",
            field: "mainType",
        },
        {
            title: "小項目",
            field: "subType",
        },
        {
            title: "預約日期",
            field: "appointmentDate",
            type: "date",
            cellStyle: { minWidth: 160 },
            dateSetting: { format: isoDateFormat },
            render: (rowData) =>
                format(new Date(rowData.appointmentDate), isoDateFormat),
        },
        {
            title: "預約時段",
            field: "appointmentPeriod",
        },
        {
            title: "姓名",
            field: "name",
        },
        {
            title: "連絡電話",
            field: "phone",
        },
        {
            title: "E-mail",
            field: "mail",
        },
    ];

    const getActions = () => [
        {
            icon: () => <EditIcon />,
            tooltip: "編輯",
            onClick: (e, rowData) => onEdit(rowData.id),
            position: "row",
        },
        {
            icon: () => <DeleteForeverIcon />,
            tooltip: "刪除",
            onClick: (e, rowData) => onDelete(rowData.id),
            position: "row",
        },
        {
            icon: () => <AddBoxIcon />,
            tooltip: "新增",
            isFreeAction: true,
            onClick: () => onAdd(),
            position: "toolbar",
        },
    ];

    return (
        <div>
            <MaterialTable
                isLoading={isLoading}
                title={""}
                localization={localization}
                style={{ margin: "5px" }}
                columns={genColumns()}
                data={dataSouce}
                options={{
                    ...defaultOption,
                    addRowPosition: "first",
                    draggable: false,
                    sorting: false,
                }}
                actions={getActions()}
            />
        </div>
    );
}

export default ReserveTable;
