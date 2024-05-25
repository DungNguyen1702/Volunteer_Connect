import React, { useState } from "react";
import { IMAGES } from "../../../constants/images";
import { ICONS } from "../../../constants/icons";
import "./index.scss";
import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";
import authAPI from "../../../api/authAPI";
import validation from "../../../support/validator";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
    const [account, setAccount] = useState("");

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/auth/login");
    };

    const onClickRegister = () => {
        navigate("/auth/register");
    };

    const onClickConfirm = () => {
        if (!validation.ValidateEmail(account)) {
            toast.error(
                "Your email address you entered is in an incorrect format. Please re-enter your email"
            );
            return;
        }

        const callAPI = async () => {
            await authAPI
                .sendForgotPassword(account)
                .then((response) => {
                    toast.success(
                        "Reset password form has been created successfull"
                    );
                    setTimeout(() => {
                        navigate("/auth/announcement/reset-password");
                    }, 2000);
                })
                .catch((error) => console.log(error));
        };
        callAPI();
    };

    return (
        <div class="forgot-password-wrapper">
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
            <div class="forgot-password-container">
                <div class="website-header">
                    <img alt="logo-web" class="logo-website" src={ICONS.logo} />
                    <h1 class="website-title">
                        Join to the Volunteer community
                    </h1>
                    <h1 class="website-title margin-top-10">Forgot password</h1>
                </div>
                <div class="forgot-password-content">
                    <p class="forgot-password-title">Email</p>
                    <Input
                        value={account}
                        onChange={(e) => setAccount(e.target.value)}
                        className="input-email"
                    />
                    <Button onClick={onClickConfirm} className="button-auth">
                        Confirm
                    </Button>
                    <div class="forgot-password-footer">
                        <p class="forgot-password-footer-item">
                            Remembered account{" "}
                            <span
                                class="forgot-password-click"
                                onClick={onClickLogin}
                            >
                                Login
                            </span>
                        </p>
                        <p class="forgot-password-footer-item">
                            Create new account{" "}
                            <span
                                class="forgot-password-click"
                                onClick={onClickRegister}
                            >
                                Register
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <img src={IMAGES.authImage} alt="auth-img" class="image-auth" />
        </div>
    );
}

export default ForgotPassword;
