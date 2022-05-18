import React, { useState } from "react";
import Title from "../Components/Typography/Title";
import Container from "@mui/material/Container";
import NewsTable from "../Components/News/Table/NewsTable";
import EditorDialog from "../Components/News/Dialog/EditorDialog";
import { format, addYears } from "date-fns";
import { isoDateFormat } from "../Components/Portfolio/Table/tableConfig";

const fakeDataSource = [
    {
        id: "1111111",
        title: "標題1111",
        introduction: "簡介111",
        contentText: "<div>zxczxczxc</div>",
        active: true,
        publishDate: "2022-01-05",
        offLineDate: "2023-01-05",
        isPinnedPost: true,
    },
    {
        id: "222222222",
        title: "標題22222",
        introduction: "簡介22222",
        contentText: "<div>zzzzzzzz</div>",
        active: false,
        publishDate: "2022-01-05",
        offLineDate: "2023-01-05",
        isPinnedPost: false,
    },
];

const defaultNewsData = {
    id: "",
    title: "",
    introduction: "",
    contentText: "",
    active: true,
    isPinnedPost: false,
    publishDate: format(new Date(), isoDateFormat),
    offLineDate: format(addYears(new Date(), 1), isoDateFormat),
};

function News() {
    const [dialogInfo, setDialogInfo] = useState({
        newsData: defaultNewsData,
        open: false,
    });

    const handleDialogClose = () => {
        setDialogInfo((prev) => ({ ...dialogInfo, open: false }));
    };

    const [data, setData] = useState(fakeDataSource);

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
        console.log("payload: ", payload);
    };

    const handleOnDelete = (id) => {
        const newDataSource = [...data].filter((item) => item.id !== id);
        setData(newDataSource);
    };

    const handleDialogNew = () => {
        setDialogInfo({ newsData: defaultNewsData, open: true });
    };

    const handleDialogUpdate = (id) => {
        setDialogInfo({
            newsData: data.find((item) => item.id === id),
            open: true,
        });
    };

    return (
        <Container>
            <Title>最新消息</Title>
            <NewsTable
                dataSouce={data}
                onDelete={handleOnDelete}
                onAdd={handleDialogNew}
                onEdit={handleDialogUpdate}
            />
            {dialogInfo.open && (
                <EditorDialog
                    open={dialogInfo.open}
                    newsData={dialogInfo.newsData}
                    onClose={handleDialogClose}
                    onSave={handleSubmit}
                />
            )}
        </Container>
    );
}

export default News;
