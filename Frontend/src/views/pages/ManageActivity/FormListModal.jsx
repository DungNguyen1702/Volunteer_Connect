import React from "react";
import "./FormListModal.scss";
import { ICONS } from "../../../constants/icons";
import { CloseOutlined } from "@ant-design/icons";

const FormListModal = ({ show, onClose, forms, onSelectForm }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-header">
                    <h2>Select a Form</h2>
                    <button className="btnExit" onClick={onClose}>
                        <CloseOutlined />
                    </button>
                </div>
                <div className="modal-body">
                    <ul className="form-list">
                        {forms.map((form) => (
                            <li
                                key={form.id}
                                onClick={() => onSelectForm(form)}
                            >
                                <div className="form-list-item">
                                    Form ID: {form.id} - Reason: {form.reason}{" "}
                                    <img
                                        alt="type icon"
                                        src={
                                            form.isAccept === 0
                                                ? ICONS.wattingIcon
                                                : form.isAccept === 1
                                                ? ICONS.acceptIcon
                                                : ICONS.denyIcon
                                        }
                                        style={{
                                            width: "25px",
                                            height: "25px",
                                        }}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="modal-footer">
                    <button className="btn-close" onClick={onClose}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormListModal;
