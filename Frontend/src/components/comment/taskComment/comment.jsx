import { useContext, useState } from "react";
import "./comment.scss";
import SupportFunction from "../../../support/support_function";
import TaskInputComment from "./inputComment/inputComment";
import AvatarAccount from "../../avatar/AvatarAccount";
import TextArea from "antd/es/input/TextArea";
import useAuth from "../../../hooks/useAuth";
import { TaskDetailContext } from "../../../views/pages/ActivityDetail/TaskManagement/StatusTable/Task";

function TaskComment(props) {
    const { data } = props;
    const replies = data.replies;

    const { account } = useAuth();

    const {
        setTaskComments,
        updateTaskComment,
        deleteTaskComment,
        taskComments,
    } = useContext(TaskDetailContext);

    const [showReplies, setShowReplies] = useState(false);
    const [showReplyBox, setShowReplyBox] = useState(false);
    const [content, setContent] = useState(data.content);
    const [isEdit, setIsEdit] = useState(false);

    const handlerClickShowMore = () => {
        setShowReplies(!showReplies);
    };

    const handlerChangeContent = (e) => {
        setContent(e.target.value);
    };

    const handlerClickReply = () => {
        console.log("Reply comment " + data.id);
        setShowReplyBox(!showReplyBox);
    };

    const handlerClickDelete = () => {
        setTaskComments(deleteTaskComment(taskComments, data.id));
    };

    const handlerClickEdit = () => {
        if (isEdit) {
            setTaskComments(
                updateTaskComment(
                    taskComments,
                    {
                        content : content,
                        updatedAt: SupportFunction.convertStringToArray(
                            SupportFunction.getCurrentlyDate()
                        ),
                        id: data.id,
                    },
                    data.id
                )
            );
        }
        setIsEdit(!isEdit);
    };

    return (
        <div class="comment-wrapper">
            {account && (
                <AvatarAccount
                    name={data.account.name}
                    avatar={data.account.avatar}
                    backgroundNoAva={data.account.backgroundNoAva}
                    size={"40px"}
                />
            )}
            <div class="comment-content">
                <div class="comment-top-wrapper">
                    <h3>{data.account.name}</h3>
                    <p class="comment-created-at">
                        {data.updatedAt
                            ? SupportFunction.convertDateFromArrayToString(
                                  data.updatedAt
                              ) + " ( updated )"
                            : SupportFunction.convertDateFromArrayToString(
                                  data.createdAt
                              )}
                    </p>
                </div>
                {isEdit ? (
                    <TextArea
                        className="reply-input"
                        value={content}
                        onChange={handlerChangeContent}
                        autoSize
                    />
                ) : (
                    <p>{content}</p>
                )}
                <div class="comment-button-group">
                    {account && account.id === data.accountId && (
                        <div class="comment-button-group">
                            <div
                                class="comment-button-item"
                                onClick={handlerClickDelete}
                            >
                                Delete
                            </div>
                            <div
                                class="comment-button-item"
                                onClick={handlerClickEdit}
                            >
                                {isEdit ? "Confirm" : "Edit"}
                            </div>
                        </div>
                    )}
                    <div
                        class="comment-button-item"
                        onClick={handlerClickReply}
                    >
                        Reply
                    </div>
                </div>

                {/* reply box */}
                <div>{showReplyBox && <TaskInputComment data={data} setShowReplyBox={setShowReplyBox}/>}</div>

                {replies.length !== 0 && !showReplies && (
                    <p
                        className="comment-button-item comment-button-item-show-margin"
                        onClick={handlerClickShowMore}
                    >
                        Show{" "}
                        {SupportFunction.getStringReply(
                            replies ? replies.length : 0
                        )}
                    </p>
                )}
                {replies.length !== 0 &&
                    showReplies &&
                    replies.map((reply) => (
                        <TaskComment data={reply} key={reply.id} />
                    ))}
                {replies.length !== 0 && showReplies && (
                    <p
                        className="comment-button-item comment-button-item-show-margin"
                        onClick={handlerClickShowMore}
                    >
                        Show less
                    </p>
                )}
            </div>
        </div>
    );
}

export default TaskComment;
