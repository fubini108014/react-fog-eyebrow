import React, { useState } from "react";
import Title from "../Components/Typography/Title";
import { TabsButton } from "../Components/Button/TabsButton";
import Container from "@mui/material/Container";
import PortfolioTable from "../Components/Portfolio/Table/PortfolioTable";
const fakeDataSource = [
    {
        id: "aaaaa",
        title: "作品集A",
        category: "2",
        priority: 1,
        active: true,
        before: "Rectangle_259.png",
        after: "Rectangle_260.png",
    },
    {
        id: "bbbbb",
        title: "作品集B",
        category: "3",
        priority: 2,
        active: false,
        before: "Rectangle_261.png",
        after: "Rectangle_262.png",
    },
];

function Portfolio() {
    const [data, setData] = useState(fakeDataSource);

    const handleOnAdd = (payload) => {
        console.log("add payload: ", payload);
        setData([...data, payload]);
    };

    const handleOnUpdate = (payload) => {
        console.log("update payload: ", payload);
        const updateIdx = data.findIndex((item) => item.id === payload.id);
        const newDataSource = [...data];
        newDataSource[updateIdx] = payload;
        setData(newDataSource);
    };

    const handleOnDelete = (id) => {
        const newDataSource = [...data].filter((item) => item.id !== id);
        setData(newDataSource);
        console.log("delete id: ", id);
    };
    return (
        <Container>
            <Title>作品集</Title>
            <TabsButton
                options={[
                    { text: "霧眉", value: "1" },
                    { text: "女神裸唇", value: "2" },
                    { text: "紋眼線", value: "3" },
                ]}
                onClickType={(value) => {
                    console.log("value:", value);
                }}
            />
            <PortfolioTable
                onAdd={handleOnAdd}
                onDelete={handleOnDelete}
                onUpdate={handleOnUpdate}
                dataSouce={data}
            />
        </Container>
    );
}

export default Portfolio;
