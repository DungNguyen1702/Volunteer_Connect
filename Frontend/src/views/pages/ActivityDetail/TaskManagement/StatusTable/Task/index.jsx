import "./index.scss";
import SupportFunction from "../../../../../../support/support_function";
import { Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { TaskDataContext } from "../..";
import { useContext, useState } from "react";
import { useDrag } from "react-dnd";
import TaskDetail from "../TaskDetail";
import AvatarAccount from "../../../../../../components/avatar/AvatarAccount";

function TaskItem(props) {
    const {  showingTaskTableID } = useContext(TaskDataContext);
    const { taskInfo, colorStatus } = props;

    const [visibleDetail, setVisibleDetail] = useState(false);

    const taskComments = taskInfo.TaskComments;
    const candidate = taskInfo.candidate;

    const [{ isDragging }, drag] = useDrag({
        type: "taskItem",
        item: {
            id: taskInfo.id,
            taskTableId: showingTaskTableID,
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const onClickTask = () => {
        setVisibleDetail(true);
    };
    const onCloseModal = ()=>{
        setVisibleDetail(false);
    }

    return (
        <div
            class="task-item-wrapper"
            ref={drag}
            style={{ opacity: isDragging ? 0.9 : 1 }}
        >
            <div onClick={onClickTask} class="task-item-container">
                <div
                    className="task-color-status-task"
                    style={{ backgroundColor: colorStatus }}
                ></div>
                <div className="task-item-content">
                    <h3 class="task-item-title">
                        {SupportFunction.TruncateText(taskInfo.title, 25)}
                    </h3>
                    <div class="task-item-date-container">
                        <p>
                            <strong class="primary-green-color-style">
                                Created at :{" "}
                            </strong>
                            {taskInfo.createdAt}
                        </p>
                        <p class="task-date-end">
                            <strong class="primary-green-color-style">
                                Deadline :{" "}
                            </strong>
                            {taskInfo.dateEnd}
                        </p>
                    </div>
                    <div class="task-item-description">
                        <p>
                            {SupportFunction.TruncateText(
                                taskInfo.description,
                                35
                            )}
                        </p>
                    </div>
                    <div class="task-item-footer">
                        <p class="task-item-comment-number">
                            {SupportFunction.getStringComment(
                                taskComments ? taskComments.length : 0
                            )}
                        </p>
                        {candidate ? (
                            <AvatarAccount
                                name={candidate.user.account.name}
                                avatar={candidate.user.account.avatar}
                                backgroundNoAva={
                                    candidate.user.account.backgroundNoAva
                                }
                            />
                        ) : (
                            <Tooltip title="No user" placement="top">
                                <Avatar
                                    className="avatar-no-user-item"
                                    icon={<UserOutlined />}
                                    size={"large"}
                                />
                            </Tooltip>
                        )}
                    </div>
                </div>
            </div>
            {visibleDetail && (
                <TaskDetail
                    visibleDetail={visibleDetail}
                    taskInfo={taskInfo}
                    onCloseModal={onCloseModal}
                />
            )}
        </div>
    );
}

export default TaskItem;
