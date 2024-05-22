import styles from "./SignUp.module.css";
import { useState } from "react";
import { Button, DatePicker, Input, Radio } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import SupportFunction from "../../../support/support_function";

const SignUp = () => {
    const [account, setAccount] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const [gender, setGender] = useState("Nam");
    const [birthday, setBirthday] = useState(null);
    const [role, setRole] = useState(1);

    const navigate = useNavigate();

    const onChangeAccount = (e) => {
        setAccount(e.target.value);
    };
    const onChangeName = (e) => {
        setName(e.target.value);
    };
    const onChangeTel = (e) => {
        setTel(e.target.value);
    };
    const onChangeAddress = (e) => {
        setAddress(e.target.value);
    };
    const onChangeGender = (e) => {
        setGender(e.target.value);
    };
    const onChangeBirthday = (date, dateString) => {
        setBirthday(date);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };
    const onClickLogin = () => {};
    const onClickLoginPage = () => {
        navigate("/auth/login");
    };
    const disabledDate = (current) => {
        return current && current > moment().endOf("day");
    };
    return (
        <div className={styles.signUp}>
            <div className={styles.mainContainerWrapper}>
                <div className={styles.mainContainer}>
                    <div className={styles.mainContainerInner}>
                        <div className={styles.inputAreaParent}>
                            <div className={styles.inputArea}>
                                <h1 className={styles.getStartedNow}>
                                    Join to the Volunteer community
                                </h1>
                            </div>
                            <form className={styles.loginArea}>
                                <div className={styles.nameInputArea}>
                                    <div className={styles.frameParent}>
                                        <div className={styles.nameWrapper}>
                                            <div className={styles.name1}>
                                                Email address
                                            </div>
                                        </div>
                                        <Input
                                            className="styles.input_Sign"
                                            placeholder="Enter your email address"
                                            type="text"
                                            value={account}
                                            onChange={onChangeAccount}
                                        />
                                    </div>
                                    <div
                                        className={styles.nameInputFieldParent}
                                    >
                                        <div className={styles.nameInputField}>
                                            <div className={styles.name}>
                                                Name
                                            </div>
                                        </div>
                                        <Input
                                            className="styles.input_Sign"
                                            placeholder="Enter your name"
                                            type="text"
                                            value={name}
                                            onChange={onChangeName}
                                        />
                                    </div>
                                    <div
                                        className={styles.nameInputFieldParent}
                                    >
                                        <div className={styles.nameInputField}>
                                            <div className={styles.name}>
                                                Role
                                            </div>
                                        </div>
                                        <div class={styles.buttonGroupRole}>
                                            <Button 
                                                onClick={() => setRole(1)}
                                                className={role === 1 ? styles.activeButtonRole : styles.buttonRole}
                                            >
                                                Student
                                            </Button>
                                            <Button 
                                                onClick={() => setRole(2)}
                                                className={role === 2 ? styles.activeButtonRole : styles.buttonRole}
                                            >
                                                Organization
                                            </Button>
                                        </div>
                                    </div>
                                    {role === 1 && (
                                        <>
                                            <div className={styles.frameGroup}>
                                                <div
                                                    className={
                                                        styles.nameContainer
                                                    }
                                                >
                                                    <div
                                                        className={styles.name2}
                                                    >
                                                        Telephone
                                                    </div>
                                                </div>
                                                <Input
                                                    placeholder="Enter your telephone"
                                                    value={tel}
                                                    onChange={onChangeTel}
                                                />
                                            </div>
                                            <div className={styles.frameGroup}>
                                                <div
                                                    className={
                                                        styles.nameContainer
                                                    }
                                                >
                                                    <div
                                                        className={styles.name2}
                                                    >
                                                        Address
                                                    </div>
                                                </div>
                                                <Input
                                                    placeholder="Enter your address"
                                                    value={address}
                                                    onChange={onChangeAddress}
                                                />
                                            </div>
                                            <div className={styles.frameGroup}>
                                                <div
                                                    className={
                                                        styles.nameContainer
                                                    }
                                                >
                                                    <div
                                                        className={styles.name2}
                                                    >
                                                        Gender
                                                    </div>
                                                </div>
                                                <Radio.Group
                                                    onChange={onChangeGender}
                                                    value={gender}
                                                >
                                                    <Radio value={"Male"}>
                                                        Male
                                                    </Radio>
                                                    <Radio value={"Female"}>
                                                        Female
                                                    </Radio>
                                                </Radio.Group>
                                            </div>
                                            <div className={styles.frameGroup}>
                                                <div
                                                    className={
                                                        styles.nameContainer
                                                    }
                                                >
                                                    <div
                                                        className={styles.name2}
                                                    >
                                                        Birthday
                                                    </div>
                                                </div>
                                                <DatePicker
                                                    onChange={onChangeBirthday}
                                                    disabledDate={disabledDate}
                                                    value={birthday}
                                                />
                                            </div>
                                        </>
                                    )}
                                    <div className={styles.frameGroup}>
                                        <div className={styles.nameContainer}>
                                            <div className={styles.name2}>
                                                Password
                                            </div>
                                        </div>
                                        <Input.Password
                                            placeholder="Enter your password"
                                            value={password}
                                            onChange={onChangePassword}
                                        />
                                    </div>
                                    <div className={styles.frameGroup}>
                                        <div className={styles.nameContainer}>
                                            <div className={styles.name2}>
                                                Confirm Password
                                            </div>
                                        </div>
                                        <Input.Password
                                            placeholder="Enter your password again"
                                            value={confirmPassword}
                                            onChange={onChangeConfirmPassword}
                                        />
                                    </div>
                                    <div className={styles.groupDiv}>
                                        <label
                                            className={styles.checkboxWrapper}
                                        >
                                            <input
                                                type="checkbox"
                                                className={styles.checkbox}
                                            />
                                            <span
                                                className={
                                                    styles.customCheckbox
                                                }
                                            ></span>
                                        </label>
                                        <div
                                            className={styles.iAgreeToContainer}
                                        >
                                            {`I agree to the `}
                                            <span
                                                className={styles.termsPolicy}
                                            >{`terms & policy`}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    className={styles.buttonSignUp}
                                    onClick={onClickLogin}
                                >
                                    Sign Up
                                </Button>
                            </form>
                            <div className={styles.dividerArea}>
                                <div className={styles.dividerParent}>
                                    <div className={styles.divider} />
                                    <div className={styles.orWrapper}>
                                        <div className={styles.or}>Or</div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.socialLoginArea}>
                                <div className={styles.googleLoginArea}>
                                    <div
                                        className={
                                            styles.googleButtonContentWrapper
                                        }
                                    >
                                        <button
                                            className={
                                                styles.googleButtonContent
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.icons8Google1Parent
                                                }
                                            >
                                                <img
                                                    className={
                                                        styles.icons8Google1
                                                    }
                                                    alt=""
                                                    src="/icons8google-1.svg"
                                                />
                                                <div
                                                    className={
                                                        styles.signInWithGoogleWrapper
                                                    }
                                                >
                                                    <div
                                                        className={
                                                            styles.signInWith
                                                        }
                                                    >
                                                        Sign in with Google
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                    <button className={styles.appleLoginArea}>
                                        <div
                                            className={
                                                styles.icons8AppleLogo1Parent
                                            }
                                        >
                                            <img
                                                className={
                                                    styles.icons8AppleLogo1
                                                }
                                                alt=""
                                                src="/icons8applelogo-1.svg"
                                            />
                                            <div className={styles.appleIcon}>
                                                <div
                                                    className={
                                                        styles.signInWith1
                                                    }
                                                >
                                                    Sign in with Apple
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className={styles.signInPromptAreaWrapper}>
                                    <div className={styles.signInPromptArea}>
                                        <div
                                            className={
                                                styles.haveAnAccountSignInWrapper
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.haveAnAccountContainer
                                                }
                                            >
                                                <span
                                                    className={
                                                        styles.haveAnAccount
                                                    }
                                                >{`Have an account?  `}</span>
                                                <span
                                                    className={styles.signIn}
                                                    onClick={onClickLoginPage}
                                                >
                                                    Log in
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img
                        className={styles.backgroundIcon}
                        loading="lazy"
                        alt=""
                        src="/rectangle-29@2x.png"
                    />
                </div>
            </div>
            <img
                className={styles.foregroundIcon}
                loading="lazy"
                alt=""
                src="/rectangle-701@2x.png"
            />
        </div>
    );
};

export default SignUp;
