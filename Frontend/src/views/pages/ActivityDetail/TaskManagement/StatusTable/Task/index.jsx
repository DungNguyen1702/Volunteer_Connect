import "./index.scss";
import SupportFunction from "../../../../../../support/support_function";
import { Avatar, Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { TaskDataContext } from "../..";
import { createContext, useContext, useState } from "react";
import { useDrag } from "react-dnd";
import TaskDetail from "../TaskDetail";
import AvatarAccount from "../../../../../../components/avatar/AvatarAccount";

export const TaskDetailContext = createContext();

function TaskItem(props) {
    const { showingTaskTableID } = useContext(TaskDataContext);
    const { taskInfo, colorStatus } = props;

    const [visibleDetail, setVisibleDetail] = useState(false);

    const [taskComments, setTaskComments] = useState(
        taskInfo.taskComments ? taskInfo.taskComments : []
    );

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
    const onCloseModal = () => {
        setVisibleDetail(false);
    };
    const addTaskComment = (comments, newComment) => {
        if (newComment.comment_parentId === null) {
            setTaskComments([...comments, newComment]);
        } else {
            setTaskComments(
                comments.map((comment) => {
                    if (comment.id === newComment.comment_parentId) {
                        return {
                            ...comment,
                            replies: [...comment.replies, newComment],
                        };
                    } else if (comment.replies.length > 0) {
                        return {
                            ...comment,
                            replies: addTaskComment(
                                comment.replies,
                                newComment
                            ),
                        };
                    } else {
                        return comment;
                    }
                })
            );
        }
    };

    return (
        <TaskDataContext.Provider value={{
            addTaskComment : addTaskComment,
        }}>
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
                            {taskInfo.title &&
                                SupportFunction.TruncateText(
                                    taskInfo.title,
                                    10
                                )}
                        </h3>
                        <div class="task-item-date-container">
                            <p>
                                <strong class="primary-green-color-style">
                                    Created at :{" "}
                                </strong>
                                {SupportFunction.convertDateFromArrayToString(
                                    taskInfo.createdAt
                                )}
                            </p>
                            <p class="task-date-end">
                                <strong class="primary-green-color-style">
                                    Deadline :{" "}
                                </strong>
                                {SupportFunction.convertDateFromArrayToString(
                                    taskInfo.dateEnd
                                )}
                            </p>
                        </div>
                        <div class="task-item-description">
                            <p>
                                {taskInfo.description &&
                                    SupportFunction.TruncateText(
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
        </TaskDataContext.Provider>
    );
}

export default TaskItem;
