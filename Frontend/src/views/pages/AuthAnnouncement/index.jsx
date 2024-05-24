import React, { useEffect, useState } from "react";
import { IMAGES } from "../../../constants/images";
import { ICONS } from "../../../constants/icons";
import "./index.scss";
import { useNavigate, useParams } from "react-router-dom";

function ForgotPassword() {
    const { status } = useParams();

    const [message, setMessage] = useState("");
    const [type, setType] = useState(1); // 1: normal announcement 2: successfull announcement 3: failed announcement

    useEffect(() => {
        // Register

        // valid register sucessfull
        if (status === "success-valid-account") {
            setMessage(
                "We are pleased to inform you that your email has been successfully validated. You can now log in to our system using your email."
            );
            setType(2);
        }

        // token expired
        else if (status === "expired-token") {
            setMessage(
                "We regret to inform you that your account validation period has expired. Please create a forgotten password registration form again"
            );
            setType(3);
        }

        // wait auth valid ( organization )
        else if (status === "wait-auth-valid") {
            setMessage(
                "Thank you for your registration. Your account validation is currently pending admin approval. You will receive a notification in your email once your account has been approved."
            );
            setType(1);
        }

        // send-email-register ( candidate )
        else if (status === "send-email") {
            setMessage(
                "A confirmation email has been sent to your registered email address. Please check your inbox (and spam/junk folder) to confirm your account."
            );
            setType(1);
        }

        // Reset password

        // successfull
        else if (status === "reset-password-sucessfull") {
            setMessage(
                "Your password has been successfully changed. You can now log in to our system using your new password."
            );
            setType(2);
        }

        // create form
        else if (status === "reset-password") {
            setMessage(
                "A password reset request has been created for your account. Please check your registered email for further instructions to reset your password."
            );
            setType(1);
        } 
        
        else {
            setMessage("Auth annoucement");
            setType(1);
        }
    }, [status]);

    const navigate = useNavigate();

    const onClickLogin = () => {
        navigate("/auth/login");
    };

    const onClickRegister = () => {
        navigate("/auth/register");
    };

    return (
        <div class="auth-announcement-wrapper">
            <div class="auth-announcement-container">
                <div class="website-header">
                    <img alt="logo-web" class="logo-website" src={ICONS.logo} />
                    <h1 class="website-title">
                        Join to the Volunteer community
                    </h1>
                </div>
                <div class="auth-announcement-content">
                    <h1
                        class={`website-title margin-top-10 ${
                            type === 2
                                ? "success-message"
                                : type === 3 && "fail-message"
                        }`}
                    >
                        Announcement
                    </h1>
                    {type === 2 ? (
                        <img
                            alt="success-icon"
                            src={ICONS.successIcon}
                            class="auth-icon"
                        />
                    ) : (
                        type === 3 && (
                            <img
                                alt="fail-icon"
                                src={ICONS.failIcon}
                                class="auth-icon"
                            />
                        )
                    )}
                    {message !== "" && (
                        <p
                            class={`${
                                type === 2
                                    ? "success-message"
                                    : type === 3 && "fail-message"
                            } message-style`}
                        >
                            {message}
                        </p>
                    )}
                </div>
                <div class="auth-announcement-footer">
                    <p class="auth-announcement-footer-item">
                        Have an account{" "}
                        <span
                            class="auth-announcement-click"
                            onClick={onClickLogin}
                        >
                            Login
                        </span>{" "}
                        ?
                    </p>
                    <p class="auth-announcement-footer-item">
                        Create new account{" "}
                        <span
                            class="auth-announcement-click"
                            onClick={onClickRegister}
                        >
                            Register
                        </span>{" "}
                        ?
                    </p>
                </div>
            </div>
            <img src={IMAGES.authImage} alt="auth-img" class="image-auth" />
        </div>
    );
}

export default ForgotPassword;
