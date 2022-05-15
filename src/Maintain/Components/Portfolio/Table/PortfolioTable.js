import React from "react";
import MaterialTable from "@material-table/core";
import { MaterialTableConfig } from "./tableConfig";
import TypeSelect from "../Select/TypeSelect";
import AntSwitch from "../Switch/AntSwitch";
import ImageUploadField from "../../Field/ImageUploadField";
import { renderImage } from "./portfolioHelper";
const { localization, defaultOption } = MaterialTableConfig;

const typeOptions = [
    { text: "法式霧眉", value: "1" },
    { text: "韓系霧眉", value: "2" },
    { text: "霧加飄眉", value: "3" },
    { text: "補色", value: "4" },
];

function PortfolioTable({
    dataSouce = [],
    onDelete = () => {},
    onAdd = () => {},
    onUpdate = () => {},
    isLoading = false,
}) {
    const genColumns = () => [
        {
            title: "標題",
            field: "title",
        },
        {
            title: "類別",
            field: "category",
            editComponent: function (props) {
                return (
                    <TypeSelect
                        options={typeOptions}
                        defaultValue={props.value}
                        onChange={(val) => {
                            props.onRowDataChange({
                                ...props.rowData,
                                category: val,
                            });
                        }}
                    />
                );
            },
            render: function (rowData) {
                return (
                    typeOptions.find((item) => rowData.category === item.value)
                        .text || ""
                );
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
            //editable: "never",
            //width: "5%",
            //cellStyle: { width: 90 },

            render: (rowData) => (rowData.active ? "OPEN" : "CLOSE"),
        },
        {
            title: "Before",
            field: "before",
            editComponent: (props) => {
                return (
                    <ImageUploadField
                        fieldName={`portfolio_before_files`}
                        defaultFile={props.value}
                        onChange={(fileInfo) => {
                            props.onRowDataChange({
                                ...props.rowData,
                                before: fileInfo.files,
                            });
                        }}
                    />
                );
            },
            width: "20%",
            cellStyle: { width: 230, maxWidth: 230 },
            render: (rowData) => {
                return renderImage(rowData.before);
            },
        },
        {
            title: "After",
            field: "after",
            editComponent: (props) => {
                return (
                    <ImageUploadField
                        fieldName={`portfolio_after_files`}
                        defaultFile={props.value}
                        onChange={(fileInfo) => {
                            props.onRowDataChange({
                                ...props.rowData,
                                after: fileInfo.files,
                            });
                        }}
                    />
                );
            },
            width: "20%",
            cellStyle: { width: 230, maxWidth: 230 },
            render: (rowData) => {
                return renderImage(rowData.after);
            },
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
                    isEditHidden: (rowData) => rowData.approved,
                    isDeleteHidden: (rowData) => rowData.approved,
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

export default PortfolioTable;
