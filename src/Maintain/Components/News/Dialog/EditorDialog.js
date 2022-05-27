import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import QuillEditor from "../../Editor/QuillEditor";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextInputField from "../../Field/TextInputField";
import BasicDatePicker from "./BasicDatePicker";
import AntSwitch from "../../Portfolio/Switch/AntSwitch";
import { isoDateFormat } from "../../Portfolio/Table/tableConfig";
import { format } from "date-fns";

const DialogWrapper = styled("div")(({ theme }) => ({}));

const NewsDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: "12px",
    background: "#f1f1f1",
    "& .dateRangePickerBox": {
        display: "flex",
        //justifyContent: "space-between",
        alignItems: "center",
        margin: "15px 0",
        "& .annoText": { whiteSpace: "nowrap" },
        "& .datepickerFieldGroup": {
            display: "flex",
            marginLeft: "7px",
            alignItems: "center",
            "& .datepickerField": {
                width: "170px",
                margin: "0px 10px",
            },
        },
    },
    "& .newsEditor": {
        margin: "0px",
        "& .quillTitle": {
            fontSize: "16px",
        },
    },
    "& .switchBox": {
        margin: "10px 0",
        display: "flex",
        "& .newsSwitch": {
            margin: "0 15px",
            "& p": {
                fontSize: "16px",
            },
        },
    },
}));

const NewsDialogTitle = styled(DialogTitle)(({ theme }) => ({
    background: "#f1f1f1",
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
}));

const NewsDialogActions = styled(DialogActions)(({ theme }) => ({
    background: "#f1f1f1",
    "& .saveBtn": {
        backgroundColor: "#576b6a",
        margin: "5px",
        letterSpacing: "10px",
        textIndent: "10px",
        textAlign: "center",
        "&:hover": {
            backgroundColor: theme.custom.primary.color5,
        },
    },
}));

function EditorDialog({
    newsData,
    open = false,
    onClose = () => {},
    onSave = () => {},
}) {
    const [tmpNewsData, setTmpNewsData] = useState(newsData);

    const handleChangeText = (text) => {
        setTmpNewsData((prev) => ({ ...prev, contentText: text }));
    };

    const handleIsPinnedChange = (event) => {
        setTmpNewsData((prev) => ({
            ...prev,
            isPinnedPost: event.target.checked,
        }));
    };

    const handleActiveChange = (event) => {
        setTmpNewsData((prev) => ({
            ...prev,
            active: event.target.checked,
        }));
    };
    const handleChangePublishDate = (date) => {
        setTmpNewsData((prev) => ({
            ...prev,
            publishDate: date,
        }));
    };

    const handleChangeOffLineDate = (date) => {
        setTmpNewsData((prev) => ({
            ...prev,
            offLineDate: date,
        }));
    };
    const handleChangeIntroduction = (event) => {
        setTmpNewsData((prev) => ({
            ...prev,
            introduction: event.target.value,
        }));
    };
    const handleChangeTitle = (event) => {
        setTmpNewsData((prev) => ({
            ...prev,
            title: event.target.value,
        }));
    };

    const handleSave = () => {
        const postData = {
            ...tmpNewsData,
            publishDate:
                typeof tmpNewsData.publishDate === "string"
                    ? tmpNewsData.publishDate
                    : format(tmpNewsData.publishDate, isoDateFormat),
            offLineDate:
                typeof tmpNewsData.offLineDate === "string"
                    ? tmpNewsData.offLineDate
                    : format(tmpNewsData.offLineDate, isoDateFormat),
        };
        onSave(postData);
    };

    return (
        <DialogWrapper>
            <Dialog
                open={open}
                onClose={onClose}
                scroll="paper"
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
                className="editorDialog"
            >
                <NewsDialogTitle id="scroll-dialog-title">
                    編輯最新消息
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: "absolute",
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                </NewsDialogTitle>
                <NewsDialogContent
                    dividers={true}
                    classes={{ dividers: "contentDividers" }}
                >
                    <TextInputField
                        text="標題"
                        fullWidth={true}
                        defaultValue={tmpNewsData.title}
                        onChange={handleChangeTitle}
                        placeholder="請輸入標題"
                    />
                    <TextInputField
                        text="簡述"
                        fullWidth={true}
                        defaultValue={tmpNewsData.introduction}
                        onChange={handleChangeIntroduction}
                        placeholder="請輸入簡述"
                    />
                    <div className="dateRangePickerBox">
                        <div className="annoText">公告時間</div>
                        <div className="datepickerFieldGroup">
                            <BasicDatePicker
                                label="上架日期"
                                value={tmpNewsData.publishDate}
                                onChange={handleChangePublishDate}
                            />
                            ~
                            <BasicDatePicker
                                label="下架日期"
                                value={tmpNewsData.offLineDate}
                                onChange={handleChangeOffLineDate}
                            />
                        </div>
                    </div>
                    <div className="switchBox">
                        是否置頂
                        <AntSwitch
                            className="newsSwitch"
                            defaultChecked={newsData.isPinnedPost}
                            onChange={handleIsPinnedChange}
                            textLF="否"
                            textRL="是"
                        />
                    </div>
                    <div className="switchBox">
                        上架狀態
                        <AntSwitch
                            className="newsSwitch"
                            defaultChecked={newsData.active}
                            onChange={handleActiveChange}
                            textLF="關"
                            textRL="開"
                        />
                    </div>
                    <QuillEditor
                        className="newsEditor"
                        onChange={handleChangeText}
                        value={tmpNewsData.contentText}
                        title="內容"
                    />
                </NewsDialogContent>
                <NewsDialogActions>
                    <Button
                        className="saveBtn"
                        onClick={handleSave}
                        variant="contained"
                    >
                        {true ? "儲存" : "新增"}
                    </Button>
                </NewsDialogActions>
            </Dialog>
        </DialogWrapper>
    );
}

export default EditorDialog;
