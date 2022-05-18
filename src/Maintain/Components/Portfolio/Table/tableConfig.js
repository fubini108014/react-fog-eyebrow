export const MaterialTableConfig = {
    localization: {
        pagination: {
            labelDisplayedRows: "顯示第 {from} 至 {to} 筆結果，共 {count} 筆",
            firstTooltip: "最前頁",
            previousTooltip: "前一頁",
            nextTooltip: "下一頁",
            lastTooltip: "最末頁",
            labelRowsSelect: "筆",
        },
        toolbar: {
            nRowsSelected: "已選 {0} 筆",
            searchPlaceholder: "請輸入關鍵字",
            searchTooltip: "搜尋",
        },
        header: {
            actions: "操作",
        },
        body: {
            emptyDataSourceMessage: "查無資料",
            filterRow: {
                filterTooltip: "Filter",
            },
            editRow: {
                deleteText: "您確定要刪除這筆資料嗎?",
                cancelTooltip: "取消",
                saveTooltip: "儲存",
            },
            editTooltip: "編輯",
            deleteTooltip: "刪除",
            addTooltip: "新增",
        },
    },
    defaultOption: {
        pageSizeOptions: [10],
        pageSize: 10,
        actionsColumnIndex: -1,
    },
};

export const isoDateFormat = "yyyy-MM-dd";
