import React, { useEffect, useState } from "react";
import "./index.scss";
import DataTable from "react-data-table-component";
import accountAPI from "../../../api/accountAPI";
import { ROLE } from "../../../constants/account_role";
import SupportFunction from "../../../support/support_function";
import { toast } from "react-toastify";
import sendMailAPI from "../../../api/sendMail";
import { ICONS } from "../../../constants/icons";
import UserIcon from "../../../components/user";
import { Button } from "antd";
import {
    DeleteOutlined,
    LockOutlined,
    MailOutlined,
    UndoOutlined,
    UnlockOutlined,
} from "@ant-design/icons";

function ManageAccount() {
    const [originalRecords, setOriginalRecords] = useState([]);
    const [records, setRecords] = useState([]);

    const deleteAccount = async (accId, isDeleted) => {
        try {
            await accountAPI.deleteAccount(accId, isDeleted);
            const newRecords = records.map((record) => {
                if (record.id === accId) {
                    console.log({ ...record, isDeleted: isDeleted ? true : false }," deleteAccount", record.isDeleted);
                    return { ...record, isDeleted: isDeleted ? true : false };
                } else {
                    return record;
                }
            });
            setOriginalRecords(newRecords);
            setRecords(newRecords);
            toast.success(isDeleted ? "Delete account successfully" : "Recovery account successfully");
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete account");
        }
    };

    useEffect(() => {
        const callApi = async () => {
            try {
                const response = await accountAPI.getAllAccountByAdmin();
                setOriginalRecords(response.data);
                console.log(response.data);
                setRecords(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        callApi();
    }, []);

    const onClickChangeDeleteStatus = (id, isDeleted) => {
        //Mở khóa tai khoan
        deleteAccount(id, isDeleted);
    };
    const onClickMail = async (email) => {
        try {
            await sendMailAPI.sendVerifyEmail(email);
            toast.success("Verification email sent successfully");
        } catch (error) {
            toast.error("Failed to send verification email");
        }
    };

    const columns = [
        {
            name: "ID",
            selector: (row) => row.id,
            sortable: true,
        },
        {
            name: "Account",
            selector: (row) => row.account,
            cell: (row) => (
                <div className="center-content">
                    <UserIcon
                        id={row.id}
                        name={row.name}
                        avatar={row.avatar}
                        backgroundNoAva={row.backgroundNoAva}
                        size={25}
                        role={row.role}
                    />
                </div>
            ),
        },
        {
            name: "Locked",
            selector: (row) => row.isDeleted,
            cell: (row) => (
                <div className="center-content">
                    {row.isDeleted ? (
                        <LockOutlined className="lock-icon" />
                    ) : (
                        <UnlockOutlined className="unlock-icon" />
                    )}
                </div>
            ),
        },
        {
            name: "Email",
            selector: (row) => row.account,
            sortable: true,
        },
        {
            name: "Role",
            selector: (row) => ROLE[row.role],
            cell: (row) => (
                <div className="center-content align-item-center">
                    <img
                        alt="role-icon"
                        src={ICONS[`${ROLE[row.role].toLowerCase()}Icon`]}
                        width={20}
                        height={20}
                        style={{ marginRight: 5 }}
                    />
                    {ROLE[row.role]}
                </div>
            ),
        },
        {
            name: "Create at",
            selector: (row) =>
                SupportFunction.convertDateFromArrayToString(row.createdAt),
            sortable: true,
        },
        {
            name: "Update at",
            selector: (row) =>
                SupportFunction.convertDateFromArrayToString(row.updatedAt),
            sortable: true,
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="center-content">
                    {row.role === 2 && row.isValid !== true && (
                        <Button
                            className="btn-mail"
                            onClick={() => onClickMail(row.account)}
                            icon={<MailOutlined />}
                        />
                    )}
                    {row.isDeleted ? (
                        <Button
                            className="btn-UnDel"
                            onClick={() => onClickChangeDeleteStatus(row.id, 0)}
                            icon={<UndoOutlined />}
                        />
                    ) : (
                        <Button
                            className="btn-Del"
                            onClick={() => onClickChangeDeleteStatus(row.id, 1)}
                            icon={<DeleteOutlined />}
                        />
                    )}
                </div>
            ),
        },
    ];

    function handleFilter(event) {
        const value = event.target.value.toLowerCase();
        const newData = originalRecords.filter((row) => {
            return row.name.toString().toLowerCase().includes(value);
        });
        setRecords(newData);
    }

    return (
        <div className="container">
            <div className="data-table-container">
                <DataTable
                    title={<div className="custom-title">Account List</div>}
                    columns={columns}
                    data={records}
                    selectableRows
                    selectableRowsHighlight
                    highlightOnHover
                    fixedHeader
                    pagination
                    subHeader
                    subHeaderComponent={
                        <div className="sub-header">
                            <input
                                type="text"
                                placeholder="Search here"
                                className="form-control custom-search-input"
                                onChange={handleFilter}
                            />
                        </div>
                    }
                    subHeaderAlign="right"
                    className="managament-account-table"
                />
            </div>
        </div>
    );
}

export default ManageAccount;
