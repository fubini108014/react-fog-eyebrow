import React from "react";
import MaterialTable from "@material-table/core";
import {
    MaterialTableConfig,
    isoDateFormat,
} from "../../Portfolio/Table/tableConfig";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EditIcon from "@mui/icons-material/Edit";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import { format } from "date-fns";

const { localization, defaultOption } = MaterialTableConfig;

function NewsTable({
    dataSouce = [],
    onDelete = () => {},
    onAdd = () => {},
    onEdit = () => {},
    isLoading = false,
}) {
    const genColumns = () => [
        {
            title: "標題",
            field: "title",
        },
        {
            title: "簡介",
            field: "introduction",
        },
        {
            title: "狀態",
            field: "active",
            initialEditValue: true,
            render: (rowData) => (rowData.active ? "OPEN" : "CLOSE"),
        },
        {
            title: "上架日期",
            field: "publishDate",
            type: "date",
            cellStyle: { minWidth: 160 },
            dateSetting: { format: isoDateFormat },
            render: (rowData) =>
                format(new Date(rowData.publishDate), isoDateFormat),
        },
        {
            title: "下架日期",
            field: "offLineDate",
            dateSetting: { format: isoDateFormat },
            type: "date",
            cellStyle: { minWidth: 160 },
            render: (rowData) =>
                format(new Date(rowData.offLineDate), isoDateFormat),
        },
        {
            title: "是否置頂",
            field: "isPinnedPost",
            render: (rowData) => (rowData.isPinnedPost ? "Y" : "N"),
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
                /*editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve) => {
                            onAdd(newData);
                            resolve(0);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            onUpdate(newData);
                            resolve(0);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                onDelete(oldData.id);
                                resolve(0);
                            }, 100);
                        }),
                }}*/
            />
        </div>
    );
}

export default NewsTable;
