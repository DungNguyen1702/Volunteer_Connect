import React, { useState } from "react";
import "./index.scss";
import { Button, DatePicker, Modal, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { COUNTRY } from "../../../../constants/activity_countries";
import { TYPES } from "../../../../constants/activity_types";
import { toast } from "react-toastify";
import ValidatorFunction from "../../../../support/validator";
import SupportFunction from "../../../../support/support_function";
import ImageTag from "../../../../components/imageTag";
import { UPLOADIMAGELINK } from "../../../../constants/uploadImageLink";
import { UploadOutlined } from "@ant-design/icons";
import useAuth from "../../../../hooks/useAuth";

function CreateActModal(props) {
    const { isCreateAct, setIsCreateAct, createAct } = props;
    const {account} = useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [type, setType] = useState(1 + "");
    const [image, setImage] = useState(null);
    const [deadline, setDeadline] = useState();
    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [location, setLocation] = useState("");
    const [country, setCountry] = useState(1 + "");
    const [content, setContent] = useState("");

    const onCancelCreateAct = () => {
        setIsCreateAct(false);
    };

    const onConfirmCreateAct = () => {
        if (
            name === "" ||
            email === "" ||
            !deadline ||
            !dateStart ||
            !dateEnd ||
            location === "" ||
            content === "" ||
            !image
        ) {
            const errorString = `Please input ${
                (name === "" && "name") ||
                (email === "" && "email") ||
                (!deadline && "deadline") ||
                (!dateStart && "Start date") ||
                (!dateEnd && "End date") ||
                (location === "" && "location") ||
                (content === "" && "content") ||
                (!image && "image")
            }`;
            toast.error(errorString);
            return;
        }
        if (!ValidatorFunction.ValidateEmail(email)) {
            toast.error("The email entered is not in the correct format");
            return;
        }

        if (account && parseInt(account.role) !== 2) {
            toast.error("You are not an organizer");
            return;
        }

        createAct({
            image: image,
            email: email,
            name: name,
            type: parseInt(type),
            deadline: deadline.format("YYYY-MM-DD"),
            dateStart: dateStart.format("YYYY-MM-DD"),
            dateEnd: dateEnd.format("YYYY-MM-DD"),
            country: parseInt(country),
            location: location,
            organization_id: account.id,
            content: content,
            createdAt: SupportFunction.getCurrentlyDate(),
        });

        toast.success("Create new activity successfully");
        setIsCreateAct(false);
    };

    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };
    const onChangeLocation = (e) => {
        setLocation(e.target.value);
    };
    const onChangeContent = (e) => {
        setContent(e.target.value);
    };
    const onChangeDeadline = (date, dateString) => {
        setDeadline(date);
    };
    const onChangeDateStart = (date, dateString) => {
        setDateStart(date);
    };
    const onChangeDateEnd = (date, dateString) => {
        setDateEnd(date);
    };
    const onChangeType = (value) => {
        setType(value);
    };
    const onChangeCountry = (value) => {
        setCountry(value);
    };
    const disabledDateEnd = (current) => {
        return current.valueOf() < dateStart.valueOf();
    };
    const onChangeUploadImage = (info) => {
        console.log(info);
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            toast.success(`${info.file.name} file uploaded successfully`);
            setImage(info.file.response.result.url);
        } else if (info.file.status === "error") {
            toast.error(`${info.file.name} file upload failed.`);
        }
    };

    return (
        <div>
            <Modal
                title={"Create new activity"}
                onCancel={onCancelCreateAct}
                footer={[
                    <Button key="cancel" onClick={onCancelCreateAct}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        className="button-confirm"
                        onClick={onConfirmCreateAct}
                    >
                        Confirm
                    </Button>,
                ]}
                open={isCreateAct}
                width={"800px"}
            >
                <div class="update-act-item">
                    <div class="display-flex margin-10">
                        <p class="update-act-title">Image</p>
                        <Upload
                            name="image"
                            action={UPLOADIMAGELINK} // Đường dẫn của API để tải lên hình ảnh
                            onChange={onChangeUploadImage}
                            showUploadList={false} // Ẩn danh sách tải lên để chỉ hiển thị hình ảnh đã tải lên
                        >
                            <Button
                                className="button-confirm"
                                icon={<UploadOutlined />}
                            >
                                Upload image
                            </Button>
                        </Upload>
                    </div>
                    <ImageTag
                        width={"100%"}
                        height={400}
                        src={image}
                        nameImage={`imageOfActivity`}
                    />
                </div>
                <div class="create-act-item">
                    <p class="create-act-title">Name</p>
                    <TextArea
                        autoSize
                        value={name}
                        onChange={onChangeName}
                        maxLength={254}
                        className="create-act-input"
                    />
                </div>
                <div class="create-act-item">
                    <p class="create-act-title">Email</p>
                    <TextArea
                        autoSize
                        value={email}
                        onChange={onChangeEmail}
                        maxLength={254}
                        className="create-act-input"
                    />
                </div>

                <div class="create-act-item display-flex">
                    <div class="create-act-width-50">
                        <p class="create-act-title">Location</p>
                        <TextArea
                            autoSize
                            value={location}
                            onChange={onChangeLocation}
                            maxLength={254}
                            className="create-act-input create-act-location-input"
                        />
                    </div>
                    <div class="create-act-width-50">
                        <p class="create-act-title">Country</p>
                        <Select
                            value={country}
                            className="create-act-select"
                            onChange={onChangeCountry}
                            options={Object.entries(COUNTRY).map(
                                ([key, value]) => ({ value: key, label: value })
                            )}
                        />
                    </div>
                </div>
                <div class="create-act-item display-flex">
                    <div class="create-act-width-50">
                        <p class="create-act-title">Category</p>
                        <Select
                            value={type}
                            className="create-act-select"
                            onChange={onChangeType}
                            options={Object.entries(TYPES).map(
                                ([key, value]) => ({ value: key, label: value })
                            )}
                        />
                    </div>
                    <div class="create-act-width-50">
                        <p class="create-act-title">Deadline</p>
                        <DatePicker
                            onChange={onChangeDeadline}
                            placeholder="2023-04-23"
                            className="create-act-date-picker"
                        />
                    </div>
                </div>
                <div class="create-act-item display-flex">
                    <div class="create-act-width-50">
                        <p class="create-act-title">Start date</p>
                        <DatePicker
                            onChange={onChangeDateStart}
                            placeholder="2023-04-23"
                            className="create-act-date-picker"
                        />
                    </div>
                    <div class="create-act-width-50">
                        <p class="create-act-title">End date</p>
                        <DatePicker
                            onChange={onChangeDateEnd}
                            placeholder="2023-04-23"
                            className="create-act-date-picker"
                            disabledDate={dateStart ? disabledDateEnd : null}
                        />
                    </div>
                </div>
                <div class="create-act-item">
                    <p class="create-act-title">Content</p>
                    <TextArea
                        rows={5}
                        value={content}
                        onChange={onChangeContent}
                        maxLength={254}
                        className="create-act-input"
                    />
                </div>
            </Modal>
        </div>
    );
}

export default CreateActModal;
