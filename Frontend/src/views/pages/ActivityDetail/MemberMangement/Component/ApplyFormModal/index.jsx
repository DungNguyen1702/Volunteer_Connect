import { Button, Modal, Table } from "antd";
import React, { useContext } from "react";
import "./index.scss";
import { ActivityDetailContext } from "../../..";
import { CheckSquareOutlined, CloseSquareOutlined } from "@ant-design/icons";
import UserIcon from "../../../../../../components/user";

function ApplyFormModal(props) {
    const { confirmApplyForm, denyApplyForm, listApplyForm } = useContext(
        ActivityDetailContext
    );
    const { isOpenApplyForm, setIsOpenApplyForm } = props;

    const onCancel = () => {
        setIsOpenApplyForm(false);
    };

    const onConfirm = () => {
        setIsOpenApplyForm(false);
    };

    const onConfirmApplyForm = (applyFormId) => {
        confirmApplyForm(applyFormId);
    };

    const onDenyApplyForm = (applyFormId) => {
        denyApplyForm(applyFormId);
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
            title: "Email",
            width: 100,
            dataIndex: "email",
        },
        {
            title: "Birthday",
            width: 60,
            dataIndex: "birthday",
            align: "center",
        },
        {
            title: "Gender",
            width: 50,
            dataIndex: "gender",
            align: "center",
        },
        {
            title: "Address",
            width: 150,
            dataIndex: "address",
        },
        {
            title: "Submit date",
            width: 100,
            dataIndex: "createdAt",
            align: "center",
        },
        {
            title: "Confirm",
            width: 50,
            dataIndex: "confirm",
            align: "center",
            fixed: "right",
        },
        {
            title: "Deny",
            width: 50,
            dataIndex: "deny",
            align: "center",
            fixed: "right",
        },
    ];

    const listFilteredApplyForm = listApplyForm.filter(
        (applyForm) => applyForm.isConfirmed === null
    );

    const data = listFilteredApplyForm.map((value, index) => ({
        key: index,
        num: index + 1,
        name: (
            <UserIcon
                name={value.user.account.name}
                avatar={value.user.account.avatar}
                backgroundNoAva={value.user.account.backgroundNoAva}
            />
        ),
        email: value.user.account.account,
        birthday: value.user.birthday,
        gender: value.user.gender,
        address: value.user.address,
        confirm: (
            <Button
                icon={<CheckSquareOutlined />}
                onClick={() => onConfirmApplyForm(value.id)}
                className="button-confirm-apply-form"
            />
        ),
        deny: (
            <Button
                icon={<CloseSquareOutlined />}
                onClick={() => onDenyApplyForm(value.id)}
                className="button-deny-apply-form"
            />
        ),
        createdAt: value.createdAt,
    }));

    const paginationConfig = {
        pageSize: 6, // Số lượng mục trên mỗi trang
        total: listApplyForm.length, // Tổng số mục trong tất cả các trang
    };

    return (
        <Modal
            title={"Apply Form"}
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    className="button-confirm"
                    onClick={onConfirm}
                >
                    Confirm
                </Button>,
            ]}
            open={isOpenApplyForm}
            width={"1000px"}
        >
            <Table
                columns={columns}
                dataSource={data}
                scroll={{
                    x: 1300,
                }}
                pagination={paginationConfig}
            />
        </Modal>
    );
}

export default ApplyFormModal;
