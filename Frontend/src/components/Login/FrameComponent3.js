import { useState } from "react";
import styles from "./FrameComponent3.module.scss";
import "./FrameComponent3.module.scss";
import { Button, Input } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import auth from "../../api/authAPI";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import axiosClient from "../../api/axiosClient";
import SupportFunction from "../../support/support_function";
import checkTokenAPI from "../../api/checkToken";

const FrameComponent = () => {
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const { setToken, token } = useAuth();

    const onChangeAccount = (e) => {
        setAccount(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const navigate = useNavigate();

    const onRegister = ()=>
    {
        navigate('/auth/register')
    }

    const onClickLogin = () => {
        const callAPI = async () => {
            try {
                const values = {
                    account: account,
                    password: password,
                };

                const response = await auth.login(values);

                if (response.data.error_message) {
                    toast.error(response.data.error_message);
                    return;
                }

                if (response.status === 200) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                    toast.success("Login success");
                    setTimeout(() => navigate("/user-homepage"), 2000);
                }
            } catch (e) {
                delete axiosClient.application.defaults.headers.common[
                    "Authorization"
                ];
                toast.error("Login failed");
            } finally {
            }
        };
        if (token) {
            checkTokenAPI
                .checkToken(token)
                .then((response) => {
                    navigate("/user-homepage");
                })
                .catch((error) => {
                    delete axiosClient.application.defaults.headers.common[
                        "Authorization"
                    ];
                    callAPI();
                });
        } else {
            delete axiosClient.application.defaults.headers.common[
                "Authorization"
            ];
            callAPI();
        }
    };

    return (
        <div className={styles.frameParent}>
            <div className={styles.welcomeBackParent}>
                <h1 className={styles.welcomeBack}>Welcome back!</h1>
                <img
                    className={styles.headerRectIcon}
                    loading="lazy"
                    alt=""
                    src="/rectangle-29@2x.png"
                />
            </div>
            <form className={styles.loginForm}>
                <div className={styles.loginFields}>
                    <div className={styles.frameGroup}>
                        <div className={styles.nameWrapper}>
                            <h3 className={styles.name}>Email address</h3>
                        </div>
                        <Input
                            className={`${styles.passwordField} input-login`}
                            placeholder="Enter your email"
                            type="text"
                            value={account}
                            onChange={onChangeAccount}
                        />
                    </div>
                    <div className={styles.loginOptions}>
                        <div className={styles.frameContainer}>
                            <div className={styles.nameContainer}>
                                <h3 className={styles.name1}>Password</h3>
                            </div>
                            <Input.Password
                                placeholder="Enter your password"
                                value={password}
                                onChange={onChangePassword}
                            />
                        </div>
                        <div className={styles.forgotPasswordOption}>
                            <div className={styles.forgotPassword1}>
                                Forgot password
                            </div>
                        </div>
                    </div>
                    <div className={styles.rememberMeSettings}>
                        <label className={styles.checkboxWrapper}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                            />
                            <span className={styles.checkmark}></span>
                        </label>
                        <div className={styles.rememberFor30}>
                            Remember for 30 days
                        </div>
                    </div>
                </div>
                <div className={styles.loginFormInner}>
                    <Button
                        className={styles.buttonLogin}
                        onClick={onClickLogin}
                    >
                        Login
                    </Button>
                </div>
                <div className={styles.loginFormChild}>
                    <div className={styles.lineParent}>
                        <div className={styles.frameChild} />
                        <div className={styles.orWrapper}>
                            <div className={styles.or}>Or</div>
                        </div>
                    </div>
                </div>
            </form>
            <div className={styles.socialLogins}>
                <div className={styles.socialLoginOptions}>
                    <button className={styles.socialLoginButtons}>
                        <div className={styles.socialLoginIcons}>
                            <img
                                className={styles.icons8Google1}
                                alt=""
                                src="/icons8google-1.svg"
                            />
                            <div className={styles.signInWith}>
                                Sign in with Google
                            </div>
                        </div>
                    </button>
                    <button className={styles.socialLoginButtons1}>
                        <div className={styles.icons8AppleLogo1Parent}>
                            <img
                                className={styles.icons8AppleLogo1}
                                alt=""
                                src="/icons8applelogo-1.svg"
                            />
                            <div className={styles.signInWith1}>
                                Sign in with Apple
                            </div>
                        </div>
                    </button>
                </div>
                <div className={styles.dontHaveAnAccountSignUpWrapper}>
                    <h3 className={styles.dontHaveAnContainer}>
                        <span
                            className={styles.dontHaveAn}
                        >{`Don’t have an account?  `}</span>
                        <span 
                            className={styles.signUp}
                            onClick={onRegister}
                        >Sign Up</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default FrameComponent;
