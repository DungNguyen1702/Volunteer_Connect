import React from "react";
import "./ModalForm.scss";
import SupportFunction from "../../../support/support_function";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import deletionFormAPI from "../../../api/deletionForn.js";

const ModalForm = ({ show, onClose, data, onClickForm }) => {
    if (!show) {
        return null;
    }
    const onBack = () => {
        onClose();
        onClickForm();
    };
    const onDeny = () => {
        deletionFormAPI
            .updateDeletionForm(data.id, 2)
            .then((response) => {
                console.log(response.data);
                onBack();
            })
            .catch((error) => console.log(error));
    };
    const onAccept = () => {
        deletionFormAPI
            .updateDeletionForm(data.id, 1)
            .then((response) => {
                console.log(response.data);
                onBack();
            })
            .catch((error) => console.log(error));
    };
    console.log(data.isAccept)

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <Button
                        className="btnBack"
                        icon={<LeftOutlined />}
                        onClick={onBack}
                    />
                    <h2>Activity Deletion Form</h2>
                    <button className="btnExit" onClick={onClose}>
                        <CloseOutlined />
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        <div className="form-group">
                            <label>ID:</label>
                            <input type="text" value={data.id} readOnly />
                        </div>
                        <div className="form-group">
                            <label>Activity ID:</label>
                            <input
                                type="text"
                                value={data.activity_id}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label>Reason:</label>
                            <input type="text" value={data.reason} readOnly />
                        </div>
                        <div className="form-group">
                            <label>Created At:</label>
                            <input
                                type="text"
                                value={SupportFunction.convertDateFromArrayToString(
                                    data.createdAt
                                )}
                                readOnly
                            />
                        </div>
                        <div className="form-group">
                            <label>Created By:</label>
                            <input
                                type="text"
                                value={data.nameAccount}
                                readOnly
                            />
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    {data.isAccept === 0 && (
                        <button className="btn-accept" onClick={onAccept}>
                            Accept
                        </button>
                    )}
                    <button className="btn-close" onClick={onClose}>
                        Close
                    </button>
                    {data.isAccept === 0 && (
                        <button className="btn-deny" onClick={onDeny}>
                            Deny
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ModalForm;
