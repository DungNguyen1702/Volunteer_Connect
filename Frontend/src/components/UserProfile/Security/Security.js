import React, { useState } from "react";
import "./Security.scss";
import { Button, Input } from "antd";
import { ToastContainer, toast } from "react-toastify";
import accountInfoAPI from "../../../api/accountAPI";

const Security = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onChangePassword = (setValue, e) => {
        setValue(e.target.value);
    };

    const updatePassword = () => {
        if (
            oldPassword === "" ||
            newPassword === "" ||
            confirmPassword === ""
        ) {
            const errorString = `Please input ${
                (oldPassword === "" && "old password") ||
                (newPassword === "" && "new password") ||
                (confirmPassword === "" && "confirm password")
            }`;
            toast.error(errorString);
            return;
        }

        if (newPassword !== confirmPassword) {
            toast.error(
                "The new password is different from the confirm password"
            );
            return;
        }

        const updateAPI = async () => {
            await accountInfoAPI
                .updatePassword({
                    password: oldPassword,
                    newPassword: newPassword,
                })
                .then((response) => {
                    if(response.data.fail)
                        toast.error(response.data.fail.body);
                    else
                       toast.success("update password successfully");
                })
                .catch((error) => {
                    toast.error("update password failed");
                });
        };
        updateAPI();
    };

    return (
<<<<<<< HEAD
        <div className='securityFormParent'>
            <div className='securityForm'>
                <h1 className='mainhead1'>Change Password</h1>
                <div className='form'>
                    <div className='form-group'>
                        <label htmlFor='oldpass'>Old Password <span>*</span></label>
                        <input type="password"
=======
        <div className="accountsettings">
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
            <div className="securityForm">
                <h1 className="mainhead1">Change Password</h1>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="oldpass">
                            Old Password <span>*</span>
                        </label>
                        <Input
                            type="password"
                            value={oldPassword}
                            onChange={(e) =>
                                onChangePassword(setOldPassword, e)
                            }
>>>>>>> 5dfd36b91dcf2e9b90ff1bb04bc95e6024d16879
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="newpass">
                            New Password <span>*</span>
                        </label>
                        <Input
                            type="password"
                            value={newPassword}
                            onChange={(e) =>
                                onChangePassword(setNewPassword, e)
                            }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmPass">
                            Confirm Password <span>*</span>
                        </label>
                        <Input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) =>
                                onChangePassword(setConfirmPassword, e)
                            }
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='newpass'>Comfirm Password <span>*</span></label>
                        <input type="password"
                        />
                    </div>
                </div>
                <Button className="mainbutton1" onClick={updatePassword}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export default Security;
