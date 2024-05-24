import React, { useState } from "react";
import { IMAGES } from "../../../constants/images";
import { ICONS } from "../../../constants/icons";
import "./index.scss";
import { Button, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";

function ResetPassword() {

    const {token} = useParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/auth/login");
    };

    const onClickRegister = () => {
        navigate("/auth/register");
    };

    const onClickConfirm = ()=>{

    }

    return (
        <div class="forgot-password-wrapper">
            <div class='forgot-password-container'>
                <div class='website-header'>
                    <img alt="logo-web" class="logo-website" src={ICONS.logo} />
                    <h1 class="website-title">
                        Join to the Volunteer community
                    </h1>
                    <h1 class="website-title margin-top-10">
                        Reset password
                    </h1>
                </div>
                <div class='forgot-password-content'>
                    <p class='forgot-password-title'>Password</p>
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-email"
                    />
                    <p class='forgot-password-title'>Confirm password</p>
                    <Input.Password
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="input-email"
                    />
                    <Button
                        onClick={onClickConfirm}
                        className="button-auth"
                    >Confirm</Button>
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

export default ResetPassword;
