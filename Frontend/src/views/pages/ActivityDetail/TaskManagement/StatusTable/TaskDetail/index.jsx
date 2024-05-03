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
import TaskInputComment from "../../../../../../components/comment/taskComment/inputComment/inputComment";
import TaskComment from "../../../../../../components/comment/taskComment/comment";
import SupportFunction from "../../../../../../support/support_function";
import { TaskDataContext } from "../..";
const { Option } = Select;

function TaskDetail(props) {
    const { visibleDetail, setVisibleDetail, taskInfo, listCandidate } = props;
    const { updateTask, showingTaskTableID } = useContext(TaskDataContext);

    const [dateStart, setDateStart] = useState(
        moment(taskInfo.date_start, "YYYY-MM-DD")
    );
    const [dateEnd, setDateEnd] = useState(
        moment(taskInfo.date_end, "YYYY-MM-DD")
    );
    const [status, setStatus] = useState(taskInfo.status);
    const [assignee, setAssignee] = useState(
        taskInfo.candidate ? taskInfo.candidate : null
    );
    const [taskComments, setTaskComments] = useState(
        taskInfo.TaskComments ? taskInfo.TaskComments : []
    );
    const [description, setDescription] = useState(taskInfo.description);

    const onClickOk = () => {
        updateTask(showingTaskTableID, taskInfo.id, {
            date_start: dateStart.format("YYYY-MM-DD"),
            date_end: dateEnd.format("YYYY-MM-DD"),
            status: parseInt(status),
            candidate: assignee,
            candidate_id: assignee ? assignee.id : null,
            taskComments: taskComments,
            description: description,
        });
        setVisibleDetail(false);
    };

    const onClickCancel = () => {
        setVisibleDetail(false);
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

    return (
        <div>
            <Modal
                open={visibleDetail}
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
                <div class="task-detail-modal-wrapper">
                    <h1 id="task-detail-modal-title">{taskInfo.title}</h1>
                    <div class="task-detail-info-wrapper">
                        <div class="task-detail-date-wrapper">
                            <div class="task-detail-date-item">
                                <h3>Start date</h3>
                                <DatePicker
                                    onChange={onChangeDateStart}
                                    placeholder="2023-04-23"
                                    value={dateStart}
                                    className="task-detail-date-picker"
                                />
                            </div>
                            <div class="task-detail-date-item">
                                <h3>End date</h3>
                                <DatePicker
                                    onChange={onChangeDateEnd}
                                    placeholder="2023-04-23"
                                    disabledDate={
                                        dateStart ? disabledDateEnd : null
                                    }
                                    value={dateEnd}
                                    className="task-detail-date-picker"
                                />
                            </div>
                        </div>
                        <div class="task-detail-assignee-status-wrapper">
                            <div class="task-detail-status-wrapper">
                                <h3>Status</h3>
                                <Select
                                    defaultValue={parseInt(status)}
                                    onChange={onChangeStatus}
                                    style={{
                                        backgroundColor:
                                            TASK_STATUS_COLOR[status],
                                    }}
                                    className="task-detail-select-status"
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
                                                <p class="task-detail-status-item">
                                                    {value}
                                                </p>
                                            </Option>
                                        )
                                    )}
                                </Select>
                            </div>
                            <div class="task-detail-assignee-wrapper">
                                <h3>Assignee</h3>
                                <Select
                                    defaultValue={assignee ? assignee.id : -1}
                                    onChange={onChangeAssignee}
                                    className="task-detail-select-assignee"
                                    popupClassName="custom-dropdown"
                                >
                                    <Option
                                        value={-1}
                                        className="task-detail-assinee-item"
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
                                            className="task-detail-assinee-item"
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
                    <div class="task-detail-description-wrapper">
                        <h3 class="margin-bottom-10px">Description</h3>
                        <TextArea
                            rows={7}
                            placeholder="Input task's description"
                            maxLength={254}
                            className="task-detail-input-description"
                            value={description}
                            onChange={onChangeDescription}
                        />
                    </div>
                    <div class="task-detail-comment-wrapper">
                        <div class="task-detail-comment-reply">
                            <TaskInputComment />
                        </div>
                        {taskComments.map((comment) => (
                            <TaskComment data={comment} key={comment.id} />
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default TaskDetail;
