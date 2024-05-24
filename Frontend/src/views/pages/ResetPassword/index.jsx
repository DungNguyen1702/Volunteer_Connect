import React, { useEffect, useState } from "react";
import { IMAGES } from "../../../constants/images";
import { ICONS } from "../../../constants/icons";
import "./index.scss";
import { Button, Input } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import checkTokenAPI from "../../../api/checkToken";
import { toast } from "react-toastify";
import authAPI from "../../../api/authAPI";

function ResetPassword() {
    const { token } = useParams();

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const callAPI = async () => {
            await checkTokenAPI
                .checkToken(token)
                .then((response) => {
                    if (response.data === "false") {
                        navigate("/auth/announcement/expired-token");
                    }
                })
                .catch((error) => {
                    navigate("/auth/announcement/expired-token");
                });
        };
        callAPI();
    }, [token]);

    const onClickLogin = () => {
        navigate("/auth/login");
    };

    const onClickRegister = () => {
        navigate("/auth/register");
    };

    const onClickConfirm = () => {
        if (password === "" || confirmPassword === "") {
            toast.error(
                `${
                    (password === "" && "Password") ||
                    (confirmPassword === "" && "Confirm password")
                } can be empty. Please input ${
                    (password === "" && "password") ||
                    (confirmPassword === "" && "confirm password")
                }`
            );
            return;
        }
        if (password !== confirmPassword) {
            toast.error(
                "password and confirm password is different. Please re-enter password and confirm password"
            );
            return;
        }

        const callAPI = async () => {
            await authAPI
                .resetPassword(token, password)
                .then((reponse) => {
                    toast.success("Changed password successfully");
                    setTimeout(() => {
                        navigate(
                            "/auth/announcement/reset-password-sucessfull"
                        );
                    }, 2000);
                })
                .catch((error) => console.log(error));
        };

        callAPI();
    };

    return (
        <div class="forgot-password-wrapper">
            <div class="forgot-password-container">
                <div class="website-header">
                    <img alt="logo-web" class="logo-website" src={ICONS.logo} />
                    <h1 class="website-title">
                        Join to the Volunteer community
                    </h1>
                    <h1 class="website-title margin-top-10">Reset password</h1>
                </div>
                <div class="forgot-password-content">
                    <p class="forgot-password-title">Password</p>
                    <Input.Password
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-email"
                    />
                    <p class="forgot-password-title">Confirm password</p>
                    <Input.Password
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
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

export default ResetPassword;
