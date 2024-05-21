import React, { useContext, useState } from "react";
import "./index.scss";
import { Button, Modal, Upload } from "antd";
import ImageTag from "../../../../../../components/imageTag";
import { IMAGES } from "../../../../../../constants/images";
import { ActivityDetailContext } from "../../..";
import { UPLOADIMAGELINK } from "../../../../../../constants/uploadImageLink";
import { toast } from "react-toastify";
import { DeleteOutlined, UploadOutlined } from "@ant-design/icons";
import SupportFunction from "../../../../../../support/support_function";
import useAuth from "../../../../../../hooks/useAuth";

function CertificateModal(props) {
    const { updateCandidate } = useContext(ActivityDetailContext);

    const { account } = useAuth();

    const {
        isOpenCertificate,
        setIsOpenCertificate,
        usingCertificate,
        candidateId,
    } = props;
    const [url, setUrl] = useState(usingCertificate);

    const onCancelCertificate = () => {
        setIsOpenCertificate(false);
    };

    const onConfirmCertificate = () => {
        setIsOpenCertificate(false);
    };

    const onChangeUploadCertificate = (candidateId, info) => {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            toast.success(`${info.file.name} file uploaded successfully`);
            updateCandidate(candidateId, {
                date_earn_certificate: SupportFunction.getCurrentlyDate(),
                certificate: info.file.response.result.url,
            });
            setUrl(info.file.response.result.url);
        } else if (info.file.status === "error") {
            toast.error(`${info.file.name} file upload failed.`);
        }
    };

    const onDeleteCertificate = () => {
        updateCandidate(candidateId, {
            date_earn_certificate: null,
            certificate: null,
        });
        setUrl(null);
    };

    return (
        <Modal
            title={"Certificate"}
            onCancel={onCancelCertificate}
            footer={[
                <Button key="cancel" onClick={onCancelCertificate}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    className="button-confirm"
                    onClick={onConfirmCertificate}
                >
                    Confirm
                </Button>,
            ]}
            open={isOpenCertificate}
            width={"800px"}
        >
            {account && account.role === 2 && (
                <div class="display-flex margin-10">
                    <Upload
                        name="image"
                        action={UPLOADIMAGELINK} // Đường dẫn của API để tải lên hình ảnh
                        onChange={(info) =>
                            onChangeUploadCertificate(candidateId, info)
                        }
                        showUploadList={false} // Ẩn danh sách tải lên để chỉ hiển thị hình ảnh đã tải lên
                    >
                        <Button
                            className="button-confirm"
                            icon={<UploadOutlined />}
                        >
                            Upload new certificate
                        </Button>
                    </Upload>
                    <Button
                        className="button-delete"
                        onClick={onDeleteCertificate}
                        icon={<DeleteOutlined />}
                    >
                        Delete this certificate
                    </Button>
                </div>
            )}
            <ImageTag
                src={url}
                noPhoto={IMAGES.noCertificate}
                width={"100%"}
                height={400}
            />
        </Modal>
    );
}

export default CertificateModal;
