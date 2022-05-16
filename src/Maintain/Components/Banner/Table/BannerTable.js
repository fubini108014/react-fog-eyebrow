import React from "react";
import MaterialTable from "@material-table/core";
import { MaterialTableConfig } from "../../Portfolio/Table/tableConfig";
import AntSwitch from "../../Portfolio/Switch/AntSwitch";
import ImageUploadField from "../../Field/ImageUploadField";
import { renderImage } from "../../Portfolio/Table/portfolioHelper";
const { localization, defaultOption } = MaterialTableConfig;

function BannerTable({
    dataSouce = [],
    onDelete = () => {},
    onAdd = () => {},
    onUpdate = () => {},
    isLoading = false,
}) {
    const genColumns = () => [
        {
            title: "圖片",
            field: "image",
            editComponent: (props) => {
                return (
                    <ImageUploadField
                        fieldName={`portfolio_image_files`}
                        defaultFile={props.value}
                        onChange={(fileInfo) => {
                            props.onRowDataChange({
                                ...props.rowData,
                                image: fileInfo.files,
                            });
                        }}
                    />
                );
            },
            width: "20%",
            cellStyle: { width: 230, maxWidth: 230 },
            render: (rowData) => {
                return renderImage(rowData.image);
            },
        },
        {
            title: "狀態",
            field: "active",
            initialEditValue: true,
            editComponent: function (props) {
                return (
                    <AntSwitch
                        onChange={(event) => {
                            props.onRowDataChange({
                                ...props.rowData,
                                active: event.target.checked,
                            });
                        }}
                    />
                );
            },
            render: (rowData) => (rowData.active ? "OPEN" : "CLOSE"),
        },
        {
            title: "連結",
            field: "link",
        },
        {
            title: "順序",
            field: "priority",
            type: "numeric",
            initialEditValue: 1,
            cellStyle: { width: 100 },
        },
    ];

    return (
        <div>
            <MaterialTable
                //icons={DataTableIcon}
                isLoading={isLoading}
                title={""}
                localization={localization}
                style={{ margin: "5px" }}
                columns={genColumns()}
                data={dataSouce}
                //actions={isManager ? managerAction : undefined}
                options={{
                    ...defaultOption,
                    addRowPosition: "first",
                    draggable: false,
                    sorting: false,
                }}
                editable={{
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
                }}
            />
        </div>
    );
}

export default BannerTable;
