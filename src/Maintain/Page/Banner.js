import React, { useState } from "react";
import Title from "../Components/Typography/Title";
import Container from "@mui/material/Container";
import BannerTable from "../Components/Banner/Table/BannerTable";

const fakeDataSource = [
    {
        id: "1111111",
        priority: 1,
        active: true,
        link: "www.fadsfadfafafa.dsfasdf.com",
        image: "Rectangle_259.png",
    },
    {
        id: "222222222",
        priority: 2,
        active: false,
        link: "www.fadsfadfafafa.dsfasdf.com",
        image: "Rectangle_260.png",
    },
];

function Banner() {
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
            <Title>廣告輪播</Title>
            <BannerTable
                onAdd={handleOnAdd}
                onDelete={handleOnDelete}
                onUpdate={handleOnUpdate}
                dataSouce={data}
            />
        </Container>
    );
}

export default Banner;
