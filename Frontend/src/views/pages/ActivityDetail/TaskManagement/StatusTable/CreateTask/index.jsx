import React, { useContext, useState } from "react";
import "./index.scss";
import { Avatar, Button, DatePicker, Modal, Select, Tooltip } from "antd";
import moment from "moment";
import {
    TASK_STATUS_COLOR,
    TASK_STATUS,
} from "../../../../../../constants/task_status";
import AvatarAccount from "../../../../../../components/avatar/AvatarAccount";
import { UserOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import SupportFunction from "../../../../../../support/support_function";
import { TaskDataContext } from "../..";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const { Option } = Select;

function CreateTask(props) {
    const { isCreateTask, setIsCreateTask, listCandidate, statusColumn } =
        props;
    const { addTask, showingTaskTableID } = useContext(TaskDataContext);

    const [dateStart, setDateStart] = useState(null);
    const [dateEnd, setDateEnd] = useState(null);
    const [status, setStatus] = useState(statusColumn);
    const [assignee, setAssignee] = useState(null);
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");

    const onClickOk = () => {
        if (title === "" || !dateEnd || !dateStart || description === "") {
            const error = `Please input ${
                (title === "" && "title") ||
                (description === "" && "description") ||
                (!dateStart && "start date") ||
                (!dateEnd && "end date")
            } `;
            toast.error(error);
            return;
        }

        addTask(showingTaskTableID, {
            title: title,
            date_start: dateStart && dateStart.format("YYYY-MM-DD"),
            date_end: dateEnd && dateEnd.format("YYYY-MM-DD"),
            status: parseInt(status),
            candidate: assignee,
            candidate_id: assignee ? assignee.id : null,
            description: description,
            createdAt: SupportFunction.getCurrentlyDate(),
        });
        setIsCreateTask(false);
    };

    const onClickCancel = () => {
        setIsCreateTask(false);
    };

    const onChangeDateStart = (date, dateString) => {
        setDateStart(date);
    };

    const onChangeDateEnd = (date, dateString) => {
        setDateEnd(date);
    };

    const disabledDateEnd = (current) => {
        return current.valueOf() < dateStart.valueOf();
    };

    const onChangeStatus = (value) => {
        setStatus(parseInt(value));
    };

    const onChangeAssignee = (value) => {
        setAssignee(
            listCandidate.find(
                (candidate) => parseInt(candidate.id) === parseInt(value)
            )
        );
    };

    const onChangeDescription = (e) => {
        setDescription(e.target.value);
    };

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    return (
        <div>
            <Modal
                open={isCreateTask}
                footer={[
                    <Button key="cancel" onClick={onClickCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" onClick={onClickOk}>
                        Confirm
                    </Button>,
                ]}
                width={"1000px"}
                onCancel={onClickCancel}
            >
                <div class="create-task-modal-wrapper">
                    <div class="create-task-title">
                        <h3 class="margin-bottom-10px">Title</h3>
                        <TextArea
                            className="create-task-input-description"
                            placeholder="Input task's title"
                            autoSize
                            value={title}
                            onChange={onChangeTitle}
                        />
                    </div>
                    <div class="create-task-info-wrapper">
                        <div class="create-task-date-wrapper">
                            <div class="create-task-date-item">
                                <h3>Start date</h3>
                                <DatePicker
                                    onChange={onChangeDateStart}
                                    placeholder="2023-04-23"
                                    value={dateStart}
                                    className="create-task-date-picker"
                                />
                            </div>
                            <div class="create-task-date-item">
                                <h3>End date</h3>
                                <DatePicker
                                    onChange={onChangeDateEnd}
                                    placeholder="2023-04-23"
                                    disabledDate={
                                        dateStart ? disabledDateEnd : null
                                    }
                                    value={dateEnd}
                                    className="create-task-date-picker"
                                />
                            </div>
                        </div>
                        <div class="create-task-assignee-status-wrapper">
                            <div class="create-task-status-wrapper">
                                <h3>Status</h3>
                                <Select
                                    defaultValue={parseInt(status)}
                                    onChange={onChangeStatus}
                                    style={{
                                        backgroundColor:
                                            TASK_STATUS_COLOR[status],
                                    }}
                                    className="create-task-select-status"
                                >
                                    {Object.entries(TASK_STATUS).map(
                                        ([key, value]) => (
                                            <Option
                                                value={parseInt(key)}
                                                style={{
                                                    backgroundColor:
                                                        TASK_STATUS_COLOR[key],
                                                }}
                                            >
                                                <p class="create-task-status-item">
                                                    {value}
                                                </p>
                                            </Option>
                                        )
                                    )}
                                </Select>
                            </div>
                            <div class="create-task-assignee-wrapper">
                                <h3>Assignee</h3>
                                <Select
                                    defaultValue={assignee ? assignee.id : -1}
                                    onChange={onChangeAssignee}
                                    className="create-task-select-assignee"
                                    popupClassName="custom-dropdown"
                                >
                                    <Option
                                        value={-1}
                                        className="create-task-assinee-item"
                                    >
                                        <Tooltip
                                            title="No user"
                                            placement="top"
                                        >
                                            <Avatar
                                                className="avatar-no-user-item"
                                                icon={<UserOutlined />}
                                            />
                                            <p class="assignee-name">No user</p>
                                        </Tooltip>
                                    </Option>
                                    {listCandidate.map((candidate) => (
                                        <Option
                                            value={candidate.id}
                                            className="create-task-assinee-item"
                                        >
                                            <AvatarAccount
                                                name={
                                                    candidate.user.account.name
                                                }
                                                avatar={
                                                    candidate.user.account
                                                        .avatar
                                                }
                                                backgroundNoAva={
                                                    candidate.user.account
                                                        .backgroundNoAva
                                                }
                                            />
                                            <p class="assignee-name">
                                                {SupportFunction.TruncateText(
                                                    candidate.user.account.name,
                                                    10
                                                )}
                                            </p>
                                        </Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div class="create-task-description-wrapper">
                        <h3 class="margin-bottom-10px">Description</h3>
                        <TextArea
                            rows={7}
                            placeholder="Input task's description"
                            maxLength={254}
                            className="create-task-input-description"
                            value={description}
                            onChange={onChangeDescription}
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default CreateTask;
