import React, { useState } from "react";
import "./AccountSetting.scss";
import ImageTag from "../../../components/imageTag";
import useAuth from "../../../hooks/useAuth";
import { Button, DatePicker, Input, Select, Upload } from "antd";
import { UPLOADIMAGELINK } from "../../../constants/uploadImageLink";
import { ToastContainer, toast } from "react-toastify";
import { UploadOutlined } from "@ant-design/icons";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";
import accountInfoAPI from "../../../api/accountAPI";
import ValidateFunction from "../../../support/validator";

const AccountSetting = () => {
    const { account, setAccount } = useAuth();

    const [avatar, setAvatar] = useState(account && account.avatar);
    const [name, setName] = useState(account && account.name);
    const [email, setEmail] = useState(account && account.account);
    const [address, setAddress] = useState( account &&
        account.address ? account.address : ""
    );
    const [birthday, setBirthday] = useState(
        account && account.birthday
            ? moment(account.birthday, "YYYY-MM-DD")
            : moment("2024-05-13", "YYYY-MM-DD")
    );
    const [gender, setGender] = useState(
        account && account.gender ? account.gender : "male"
    );
    const [tel, setTel] = useState(account && account.tel ? account.tel : "");

    const updateInfo = (status) => {
        if (name === "") {
            const errorString = `Please input ${name === "" && "name"}`;
            toast.error(errorString);
            return;
        }
        if (status === 1) {
            const updateAPI = async () => {
                await accountInfoAPI
                    .updateAccount({ ...account, name: name, avatar: avatar })
                    .then((response) => {
                        setAccount({ ...account, name: name, avatar: avatar });
                        localStorage.setItem(
                            "account",
                            JSON.stringify({
                                ...account,
                                name: name,
                                avatar: avatar,
                            })
                        );
                        toast.success("update information successfully");
                    })
                    .catch((error) => {
                        toast.error("update information failed");
                    });
            };
            updateAPI();
        } else if (status === 2) {
            if (address === "" || !birthday || tel === "") {
                const errorString = `Please input ${
                    (name === "" && "name") ||
                    (!birthday && "birthday") ||
                    (tel === "" && "tel")
                }`;
                toast.error(errorString);
                return;
            }

            if (!ValidateFunction.ValidateTelephone(tel)) {
                toast.error("Please input again the telephone number");
                return;
            }

            const updateAPI = async () => {
                await accountInfoAPI
                    .updateAccount({
                        ...account,
                        address: address,
                        birthday: birthday.format("YYYY-MM-DD"),
                        gender: gender,
                        tel: tel,
                    })
                    .then((response) => {
                        setAccount({
                            ...account,
                            address: address,
                            birthday: birthday.format("YYYY-MM-DD"),
                            gender: gender,
                            tel: tel,
                        });
                        localStorage.setItem(
                            "account",
                            JSON.stringify({
                                ...account,
                                address: address,
                                birthday: birthday.format("YYYY-MM-DD"),
                                gender: gender,
                                tel: tel,
                            })
                        );
                        toast.success("update information successfully");
                    })
                    .catch((error) => {
                        toast.error("update information failed");
                    });
            };
            updateAPI();
        }
    };

    const onChangeUploadImage = (info) => {
        console.log(info);
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            toast.success(`${info.file.name} file uploaded successfully`);
            setAvatar(info.file.response.result.url);
        } else if (info.file.status === "error") {
            toast.error(`${info.file.name} file upload failed.`);
        }
    };

    const onChangeText = (setValue, e) => {
        setValue(e.target.value);
    };

    const onChangeGender = (value) => {
        setGender(value);
    };

    const onChangeBirthday = (date, dateString) => {
        setBirthday(date);
    };

    return (
        <div className="accountsetting">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                closeOnClick={true}
                pauseOnHover={true}
                draggable={true}
                progress={undefined}
                theme="colored"
            />
            <div className="profile-photo">
                <div class="profile-title-container">
                    <h1 className="mainhead1">Profile Photo</h1>
                    <Upload
                        name="image"
                        action={UPLOADIMAGELINK} // Đường dẫn của API để tải lên hình ảnh
                        onChange={onChangeUploadImage}
                        showUploadList={false} // Ẩn danh sách tải lên để chỉ hiển thị hình ảnh đã tải lên
                    >
                        <Button
                            className="button-upload"
                            icon={<UploadOutlined />}
                        />
                    </Upload>
                </div>
                <ImageTag
                    width={"90%"}
                    src={avatar}
                    nameImage={`Image_new_activity`}
                />
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="name">
                            Your name <span>*</span>
                        </label>
                        <input
                            value={name}
                            type="text"
                            onChange={(e) => onChangeText(setName, e)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">
                            Email <span>*</span>
                        </label>
                        <input
                            value={email}
                            type="text"
                            onChange={(e) => onChangeText(setEmail, e)}
                            readOnly
                        />
                    </div>
                </div>
                <Button className="mainbutton1" onClick={() => updateInfo(1)}>
                    Save
                </Button>
            </div>
            {parseInt(account.role) === 1 && (
                <div className="contact-address">
                    <h1 className="mainhead1">Information</h1>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="address">
                                Address <span>*</span>
                            </label>
                            <input
                                value={address}
                                type="text"
                                onChange={(e) => onChangeText(setAddress, e)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">
                                Phone/Mobile <span>*</span>
                            </label>
                            <input
                                value={tel}
                                type="text"
                                onChange={(e) => onChangeText(setTel, e)}
                                maxLength={10}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">
                                Gender<span>*</span>
                            </label>
                            <Select
                                options={[
                                    {
                                        value: "male",
                                        label: (
                                            <span>
                                                {" "}
                                                <FontAwesomeIcon
                                                    icon={faMars}
                                                    className="icon-male"
                                                />{" "}
                                                Male
                                            </span>
                                        ),
                                    },
                                    {
                                        value: "female",
                                        label: (
                                            <span>
                                                {" "}
                                                <FontAwesomeIcon
                                                    icon={faVenus}
                                                    className="icon-female"
                                                />{" "}
                                                Female
                                            </span>
                                        ),
                                    },
                                ]}
                                value={gender}
                                onChange={onChangeGender}
                                className="gender-select"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="dob">
                                Day of Birth <span>*</span>
                            </label>
                            <DatePicker
                                value={birthday}
                                onChange={onChangeBirthday}
                                class="birthday-picker"
                            />
                        </div>
                    </div>
                    <Button
                        className="mainbutton1"
                        onClick={() => updateInfo(2)}
                    >
                        Save
                    </Button>
                </div>
            )}
        </div>
    );
};

export default AccountSetting;
