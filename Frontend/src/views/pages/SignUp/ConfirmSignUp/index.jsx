import { IMAGES } from "../../../../constants/images";
import { ICONS } from "../../../../constants/icons";
import "./index.scss";
import { Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import authAPI from "../../../../api/authAPI";
import "react-toastify/dist/ReactToastify.css";

function ConfirmSignUp() {
    const { token } = useParams();

    const navigate = useNavigate();

    const onClickConfirm = () => {
        const callAPI = async () => {
            await authAPI
                .validAccount(token)
                .then((response) => {
                    toast.success("Valid account successfull");
                    setTimeout(() => {
                        navigate("/auth/announcement/success-valid-account");
                    }, 2000);
                })
                .catch((error) => console.log(error));
        };
        callAPI();
    };

    return (
        <div class="confirm-sign-up-wrapper">
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
            <div class="confirm-sign-up-container">
                <div class="website-header">
                    <img alt="logo-web" class="logo-website" src={ICONS.logo} />
                    <h1 class="website-title">
                        Join to the Volunteer community
                    </h1>
                </div>
                <div class="confirm-sign-up-content">
                    <h1 class="website-title margin-top-10">Valid account</h1>
                    <p class="message-style">
                        To log in to the system, please confirm the validity of
                        your account.
                    </p>
                    <Button onClick={onClickConfirm} className="button-auth">
                        Valid account
                    </Button>
                </div>
            </div>
            <img src={IMAGES.authImage} alt="auth-img" class="image-auth" />
        </div>
    );
}

export default ConfirmSignUp;
