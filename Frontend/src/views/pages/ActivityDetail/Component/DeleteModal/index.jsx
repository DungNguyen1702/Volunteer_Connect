import React, { useState } from "react";
import "./index.scss";
import { Button, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { toast } from "react-toastify";

function DeleteActModal(props) {
    const { actId, isDeleteAct, setIsDeleteAct } = props;

    const [reason, setReason] = useState("");

    const onCancelDelete = () => {
        setIsDeleteAct(false);
    };
    const onConfirmDelete = () => {
        if(reason === ''){ 
            toast.error('Please input the reason to delete this activity');
            return;
        }

        toast.success('Your request to delete this activity has been recorded');
        setIsDeleteAct(false);
    };
    const onChangeReason = (e) => {
        setReason(e.target.value);
    };

    return (
        <div>
            <Modal
                title={"Delete activity"}
                open={isDeleteAct}
                footer={[
                    <Button key="cancel" onClick={onCancelDelete}>
                        Cancel
                    </Button>,
                    <Button
                        key="submit"
                        className="button-confirm"
                        onClick={onConfirmDelete}
                    >
                        Confirm
                    </Button>,
                ]}
                width={"700px"}
                onCancel={onCancelDelete}
            >
                <p class="delete-act-modal-title">
                    Why do you want to delete this activity
                </p>
                <TextArea
                    rows={5}
                    maxLength={254}
                    value={reason}
                    onChange={onChangeReason}
                    className="delete-act-modal-reason-input"
                />
            </Modal>
        </div>
    );
}

export default DeleteActModal;
