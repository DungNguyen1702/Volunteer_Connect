import { useState } from "react";
import styles from "./FrameComponent3.module.scss";
import './FrameComponent3.module.scss'
import { Button, Input } from "antd";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import auth from "../../api/authAPI";
import useAuth from "../../hooks/useAuth";

const FrameComponent = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    const {setToken, token} = useAuth();

    const onChangeAccount = (e)=>{
        setAccount(e.target.value);
    };
    const onChangePassword = (e)=>{
        setPassword(e.target.value);
    };
    const onClickLogin = ()=>{
        const callAPI = async () => {
            try {
                const values = {
                    account : account,
                    password : password,
                }

                const response = await auth.login(values);
                
                if(response.status === 200){
                    // console.log(response.data.token)
                    console.log(setToken)
                    // setToken(response.data.token)
                    localStorage.setItem('token',response.data.token)
                    toast.success('Login success')
                }
            }
            catch (e) {
                toast.error('Login failed');
            }
            finally{
            }
        }
        callAPI()
    }

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
                                forgot password
                            </div>
                        </div>
                    </div>
                    <div className={styles.rememberMeSettings}>
                        <div className={styles.checkboxWrapper}>
                            <div className={styles.checkbox} />
                        </div>
                        <div className={styles.rememberFor30}>
                            Remember for 30 days
                        </div>
                    </div>
                </div>
                <div className={styles.loginFormInner}>
                        <Button
                            className="button-login"
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
                        <span className={styles.signUp}>Sign Up</span>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default FrameComponent;
