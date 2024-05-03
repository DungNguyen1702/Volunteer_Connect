import React, { useState } from "react";
import "./index.scss";
import { Button, DatePicker, Modal, Select, Upload } from "antd";
import moment from "moment";
import TextArea from "antd/es/input/TextArea";
import { COUNTRY } from "../../../../../../constants/activity_countries";
import { TYPES } from "../../../../../../constants/activity_types";
import { toast } from "react-toastify";
import ValidatorFunction from '../../../../../../support/validator'
import { UPLOADIMAGELINK } from '../../../../../../constants/uploadImageLink'
import { UploadOutlined } from '@ant-design/icons'
import ImageTag from '../../../../../../components/imageTag/index'

function UpdateActModal(props) {

    const { actInfo, isUpdateAct, setIsUpdateAct, updateAct } = props;

    const [name, setName] = useState(actInfo.name);
    const [email, setEmail] = useState(actInfo.email);
    const [image, setImage] = useState(actInfo.image);
    const [type, setType] = useState(actInfo.type + "");
    const [deadline, setDeadline] = useState(
        moment(actInfo.deadline, "YYYY-MM-DD")
    );
    const [dateStart, setDateStart] = useState(
        moment(actInfo.date_start, "YYYY-MM-DD")
    );
    const [dateEnd, setDateEnd] = useState(
        moment(actInfo.date_end, "YYYY-MM-DD")
    );
    const [location, setLocation] = useState(actInfo.location);
    const [country, setCountry] = useState(actInfo.country + "");
    const [content, setContent] = useState(actInfo.content);

    const onCancelUpdateAct = () => {
        setIsUpdateAct(false);
    };

    const onConfirmUpdateAct = () => {
        if (
            name === "" ||
            email === "" ||
            !deadline ||
            !dateStart ||
            !dateEnd ||
            location === "" ||
            content === "" || 
            image === null
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
        if(!ValidatorFunction.ValidateEmail(email))
        {
            toast.error('The email entered is not in the correct format')
            return;
        }

        updateAct({
            name: name,
            email: email,
            type: parseInt(type),
            deadline: deadline.format("YYYY-MM-DD"),
            date_start : dateStart.format('YYYY-MM-DD'),
            date_end : dateEnd.format('YYYY-MM-DD'),
            location : location,
            country : parseInt(country),
            content : content,
            image : image,
        });

        toast.success("Update activity's information successfully")
        setIsUpdateAct(false);
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
    const onChangeUploadImage = (info)=>{
        console.log(info)
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          toast.success(`${info.file.name} file uploaded successfully`);
          setImage(info.file.response.result.url);
        } else if (info.file.status === 'error') {
            toast.error(`${info.file.name} file upload failed.`);
        }
    };

    return (
        <div>
            <Modal
                title={"Update activity"}
                onCancel={onCancelUpdateAct}
                footer={[
                    <Button key="cancel" onClick={onCancelUpdateAct}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        className="button-confirm"
                        onClick={onConfirmUpdateAct}
                    >
                        Confirm
                    </Button>,
                ]}
                open={isUpdateAct}
                width={"800px"}
            >
                <div class="update-act-item">
                    <div class='display-flex margin-10'>
                        <p class="update-act-title">Image</p>
                        <Upload
                            name="image"
                            action={UPLOADIMAGELINK} // Đường dẫn của API để tải lên hình ảnh
                            onChange={onChangeUploadImage}
                            showUploadList={false} // Ẩn danh sách tải lên để chỉ hiển thị hình ảnh đã tải lên
                        >
                            <Button className="button-confirm" icon={<UploadOutlined/>}>Upload image</Button>
                        </Upload>
                    </div>
                    <ImageTag
                        width={'100%'}
                        height={400}
                        src={image}
                        nameImage={`Image_new_activity`}
                    />
                </div>
                <div class="update-act-item">
                    <p class="update-act-title">Name</p>
                    <TextArea
                        autoSize
                        value={name}
                        onChange={onChangeName}
                        maxLength={254}
                        className="update-act-input"
                    />
                </div>
                <div class="update-act-item">
                    <p class="update-act-title">Email</p>
                    <TextArea
                        autoSize
                        value={email}
                        onChange={onChangeEmail}
                        maxLength={254}
                        className="update-act-input"
                    />
                </div>

                <div class="update-act-item display-flex">
                    <div class="update-act-width-50">
                        <p class="update-act-title">Location</p>
                        <TextArea
                            autoSize
                            value={location}
                            onChange={onChangeLocation}
                            maxLength={254}
                            className="update-act-input update-act-location-input"
                        />
                    </div>
                    <div class="update-act-width-50">
                        <p class="update-act-title">Country</p>
                        <Select
                            value={country}
                            className="update-act-select"
                            onChange={onChangeCountry}
                            options={Object.entries(COUNTRY).map(
                                ([key, value]) => ({ value: key, label: value })
                            )}
                        />
                    </div>
                </div>
                <div class="update-act-item display-flex">
                    <div class="update-act-width-50">
                        <p class="update-act-title">Category</p>
                        <Select
                            value={type}
                            className="update-act-select"
                            onChange={onChangeType}
                            options={Object.entries(TYPES).map(
                                ([key, value]) => ({ value: key, label: value })
                            )}
                        />
                    </div>
                    <div class="update-act-width-50">
                        <p class="update-act-title">Deadline</p>
                        <DatePicker
                            onChange={onChangeDeadline}
                            placeholder="2023-04-23"
                            value={deadline}
                            className="update-act-date-picker"
                        />
                    </div>
                </div>
                <div class="update-act-item display-flex">
                    <div class="update-act-width-50">
                        <p class="update-act-title">Start date</p>
                        <DatePicker
                            onChange={onChangeDateStart}
                            placeholder="2023-04-23"
                            value={dateStart}
                            className="update-act-date-picker"
                        />
                    </div>
                    <div class="update-act-width-50">
                        <p class="update-act-title">End date</p>
                        <DatePicker
                            onChange={onChangeDateEnd}
                            placeholder="2023-04-23"
                            value={dateEnd}
                            className="update-act-date-picker"
                            disabledDate={dateStart ? disabledDateEnd : null}
                        />
                    </div>
                </div>
                <div class="update-act-item">
                    <p class="update-act-title">Content</p>
                    <TextArea
                        rows={5}
                        value={content}
                        onChange={onChangeContent}
                        maxLength={254}
                        className="update-act-input"
                    />
                </div>
            </Modal>
        </div>
    );
}

export default UpdateActModal;
