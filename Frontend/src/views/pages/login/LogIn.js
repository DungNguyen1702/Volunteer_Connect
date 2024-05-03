import { ToastContainer } from "react-toastify";
import FrameComponent3 from "../../../components/Login/FrameComponent3";
import styles from "./LogIn.module.css";

const LogIn = () => {
    return (
        <div className={styles.logIn}>
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
            <div className={styles.logInInner}>
                <FrameComponent3 />
            </div>
            <img
                className={styles.backgroundRectIcon}
                loading="lazy"
                alt=""
                src="/rectangle-701@2x.png"
            />
        </div>
    );
};

export default LogIn;
