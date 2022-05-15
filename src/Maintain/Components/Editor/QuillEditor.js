import React from "react";
import ReactQuill from "react-quill";
import { styled } from "@mui/material/styles";
import "react-quill/dist/quill.snow.css";

const Editor = {
    modules: {
        toolbar: [
            [{ header: "1" }, { header: "2" }, { font: [] }],
            [{ size: [] }],
            [{ color: [] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { align: "" },
                { align: "center" },
                { align: "right" },
                { align: "justify" },
            ],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image", "video"],
            ["clean"],
        ],
    },
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
    formats: [
        "header",
        "font",
        "size",
        "color",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "align",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
    ],
};

const AboutWrapper = styled("div")(({ theme }) => ({
    margin: "10px",
    flex: 1,
    "& .quillTitle": {
        margin: "5px 0",
        fontSize: "24px",
    },
    "& .quill-editor": {
        boxShadow: "rgb(0 0 0 / 13%) 0px 2px 4px 0px",
        background: "#FfF",
        margin: "5px 0",
        borderRadius: "0.5em",
        "& .ql-toolbar ": {
            display: "block",
            background: "#eaecec",
            borderTopLeftRadius: "0.5em",
            borderTopRightRadius: "0.5em",
            position: "sticky",
            top: "-13px",
            left: 0,
            zIndex: 10,
        },
        "& .ql-container ": {
            borderBottomLeftRadius: "0.5em",
            borderBottomRightRadius: "0.5em",
            background: "#fefcfc",
        },
        "& .ql-editor": {
            minHeight: "20em",
        },
    },
}));

function QuillEditor({ editorRef = null, value, onChange, ReactQuillProps }) {
    return (
        <AboutWrapper>
            <div className="quillTitle">簡述</div>
            {/*BUG : React 18 Strict Mode 會有兩個 toolbar 待解決*/}
            <ReactQuill
                ref={editorRef}
                theme="snow"
                readOnly={false}
                value={value}
                placeholder="請輸入內文..."
                modules={Editor.modules}
                formats={Editor.formats}
                onChange={onChange}
                className="quill-editor"
                {...ReactQuillProps}
            />
        </AboutWrapper>
    );
}

export default QuillEditor;
