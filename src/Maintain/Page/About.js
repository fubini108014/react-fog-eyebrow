import React, { useState, useRef } from "react";
import QuillEditor from "../Components/Editor/QuillEditor";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Title from "../Components/Typography/Title";
import { UploadField } from "../Components/Field/UploadField";

const AboutWrapper = styled("div")(({ theme }) => ({
    display: "flex",
}));

const Headshot = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    margin: "10px",
    "& .headshotTitle": {
        margin: "5px 0px",
        fontSize: "24px",
        "& .suggestion": {
            color: theme.custom.typography.color4,
            fontSize: "16px",
        },
    },
    "& img": {
        width: "300px",
        height: "300px",
        background: "#C4C4C4",
        lineHeight: "300px",
        textAlign: "center",
    },
}));

const EditorContainer = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    "& .saveButton": {
        width: "80px",
        margin: "0px 10px",
    },
}));

function About() {
    const fileRef = useRef(null);
    const [editorText, setEditorText] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    const handleChangeText = (text) => {
        setEditorText(text);
    };

    const handleChangeImage = (files) => {
        setImgSrc(URL.createObjectURL(files));
    };

    const submit = () => {
        console.log("file: ", fileRef.current?.files[0]);
        console.log("editorText: ", editorText);
    };

    return (
        <Container>
            <Title>關於我</Title>
            <AboutWrapper>
                <Headshot>
                    <div className="headshotTitle">
                        個人照{" "}
                        <span className="suggestion">建議尺寸400*600px</span>
                    </div>
                    <img id="" alt="請上傳圖片" src={imgSrc} />
                    <UploadField
                        text="選擇檔案"
                        inputRef={fileRef}
                        inputProps={{ accept: " image/*" }}
                        inputOnChange={handleChangeImage}
                    />
                </Headshot>
                <EditorContainer>
                    <QuillEditor
                        onChange={handleChangeText}
                        value={editorText}
                    />
                    <Button
                        variant="contained"
                        className="saveButton"
                        onClick={submit}
                    >
                        儲存
                    </Button>
                </EditorContainer>
            </AboutWrapper>
        </Container>
    );
}

export default About;
