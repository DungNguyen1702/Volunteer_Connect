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
<<<<<<< HEAD
            selector: (row) => (!row.isValid ? "Locked" : ""),
=======
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
>>>>>>> 6b2395fc151b2a192c47eaddaa2756d6634279bb
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
<<<<<<< HEAD
                    <div className="center-content">
                        {!row.isValid && (
                            <button
                                className="btn-Edit"
                                onClick={() => onClickChange(row.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                                    />
                                </svg>
                            </button>
                        )}
                        {(row.role === 2 && row.isValid) && (
                            <button
                                className="btn-mail"
                                onClick={() => onClickMail(row.account)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                                    />
                                </svg>
                            </button>
                        )}
                        <button
                            className="btn-Del"
                            onClick={() => onClickDelete(row.id)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                            </svg>
                        </button>
                    </div>
=======
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
>>>>>>> 6b2395fc151b2a192c47eaddaa2756d6634279bb
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
