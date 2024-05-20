import { Button, Table, Upload } from "antd";
import "./index.scss";
import {
    DeleteOutlined,
    FileImageOutlined,
    SnippetsOutlined,
    UploadOutlined,
} from "@ant-design/icons";
import UserIcon from "../../../../components/user";
import { useContext, useState } from "react";
import { ActivityDetailContext } from "..";
import { toast } from "react-toastify";
import { UPLOADIMAGELINK } from "../../../../constants/uploadImageLink";
import SupportFunction from "../../../../support/support_function";
import CertificateModal from "./Component/CertificateModal";
import ApplyFormModal from "./Component/ApplyFormModal";
import useAuth from "../../../../hooks/useAuth";

function MemberManagement() {
    const { listCandidate, updateCandidate, deleteCandidate, actInfo } =
        useContext(ActivityDetailContext);

    const { account } = useAuth();

    const [isOpenApplyForm, setIsOpenApplyForm] = useState(false);
    const [isOpenCertificate, setIsOpenCertificate] = useState(false);
    const [usingCandidateId, setUsingCandidateId] = useState();
    const [usingCertificate, setUsingCertificate] = useState();

    const onDeleteMember = (candidateId) => {
        deleteCandidate(candidateId);
    };

    const onWatchCertificate = (candidateId, url) => {
        const action = async () => {
            setUsingCandidateId(candidateId);
            setUsingCertificate(url);
            setIsOpenCertificate(true);
        };

        action();
    };
    const onChangeUploadCertificate = (candidateId, info) => {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            toast.success(`${info.file.name} file uploaded successfully`);
            updateCandidate(candidateId, {
                dateCertificate: SupportFunction.getCurrentlyDate(),
                certificate: info.file.response.result.url,
                certificateName: `Certificate of "${actInfo.name}" activity`,
            });
        } else if (info.file.status === "error") {
            toast.error(`${info.file.name} file upload failed.`);
        }
    };

    const columns = [
        {
            title: "Num",
            width: 40,
            dataIndex: "num",
            fixed: "left",
            align: "center",
        },
        {
            title: "Account name",
            width: 90,
            dataIndex: "name",
            fixed: "left",
        },
        {
            title: "email",
            width: 80,
            dataIndex: "email",
        },
        {
            title: "birthday",
            width: 70,
            dataIndex: "birthday",
            align: "center",
        },
        {
            title: "gender",
            width: 50,
            dataIndex: "gender",
            align: "center",
        },
        {
            title: "address",
            width: 150,
            dataIndex: "address",
        },
        {
            title: "earn certificate date",
            width: 100,
            dataIndex: "certificateDate",
            align: "center",
        },
        {
            title: "certificate",
            width: 70,
            dataIndex: "certificate",
            fixed: "right",
            align: "center",
        },
        {
            title: "joining date",
            width: 70,
            dataIndex: "createdAt",
            fixed: "right",
            align: "center",
        },
    ];

    if (account.id === actInfo.organizationId) {
        columns.push({
            title: " ",
            width: 40,
            dataIndex: "delete",
            fixed: "right",
            align: "center",
        });
    }

    const data = listCandidate.map((value, index) => ({
        num: index + 1,
        key: index,
        name: (
            <UserIcon
                name={value.user.account.name}
                avatar={value.user.account.avatar}
                backgroundNoAva={value.user.account.backgroundNoAva}
                id={value.user.account.id}
                role={value.user.account.role}
            />
        ),
        email: value.user.account.account,
        birthday: value.user.birthday,
        gender: value.user.gender,
        address: value.user.address,
        certificateDate: value.date_earn_certificate,
        certificate: value.certificate ? (
            <Button
                icon={<FileImageOutlined />}
                onClick={() => onWatchCertificate(value.id, value.certificate)}
                className="button-have-certificate"
            />
        ) : (
            <Upload
                name="image"
                action={UPLOADIMAGELINK} // Đường dẫn của API để tải lên hình ảnh
                onChange={(info) => onChangeUploadCertificate(value.id, info)}
                showUploadList={false} // Ẩn danh sách tải lên để chỉ hiển thị hình ảnh đã tải lên
            >
                <Button className="button-confirm" icon={<UploadOutlined />} />
            </Upload>
        ),
        delete: (
            <Button
                icon={<DeleteOutlined />}
                onClick={() => onDeleteMember(value.id)}
                className="button-delete"
            />
        ),
        createdAt: value.createAt,
    }));

    const paginationConfig = {
        pageSize: 8, // Số lượng mục trên mỗi trang
        total: listCandidate.length, // Tổng số mục trong tất cả các trang
    };

    const onClickApplyForm = () => {
        setIsOpenApplyForm(true);
    };

    return (
        <div class="memeber-management-wrapper">
            <h1 class="member-management-title">Member management</h1>
            {parseInt(account.role) === 2 && (
                <Button
                    className="apply-form-button"
                    onClick={onClickApplyForm}
                    icon={<SnippetsOutlined />}
                >
                    Apply form
                </Button>
            )}
            {isOpenCertificate && (
                <CertificateModal
                    isOpenCertificate={isOpenCertificate}
                    setIsOpenCertificate={setIsOpenCertificate}
                    usingCertificate={usingCertificate}
                    candidateId={usingCandidateId}
                />
            )}
            {isOpenApplyForm && (
                <ApplyFormModal
                    isOpenApplyForm={isOpenApplyForm}
                    setIsOpenApplyForm={setIsOpenApplyForm}
                />
            )}
            <div class="member-management-table">
                <Table
                    columns={columns}
                    dataSource={data}
                    scroll={{
                        x: 1300,
                    }}
                    pagination={paginationConfig}
                />
            </div>
        </div>
    );
}

export default MemberManagement;
