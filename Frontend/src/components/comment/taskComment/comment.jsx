import { useState } from "react";
import "./comment.scss";
import SupportFunction from "../../../support/support_function";
import TaskInputComment from "./inputComment/inputComment";
import AvatarAccount from "../../avatar/AvatarAccount";
import TextArea from "antd/es/input/TextArea";

function TaskComment(props) {
    const { data } = props;
    const replies = data.replies;

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
        console.log("Delete comment " + data.id);
    };

    const handlerClickEdit = () => {
        setIsEdit(!isEdit);
    };

    return (
        <div class="comment-wrapper">
            <AvatarAccount
                name={data.account.name}
                avatar={data.account.avatar}
                backgroundNoAva={data.account.backgroundNoAva}
                size={"40px"}
            />
            <div class="comment-content">
                <h3>{data.account.name}</h3>
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
                    <div
                        class="comment-button-item"
                        onClick={handlerClickDelete}
                    >
                        Delete
                    </div>
                    <div class="comment-button-item" onClick={handlerClickEdit}>
                        {isEdit ? "Confirm" : "Edit"}
                    </div>
                    <div
                        class="comment-button-item"
                        onClick={handlerClickReply}
                    >
                        Reply
                    </div>
                </div>

                {/* reply box */}
                <div>{showReplyBox && <TaskInputComment data={data} />}</div>

                {replies && !showReplies && (
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
                {replies &&
                    showReplies &&
                    replies.map((reply) => (
                        <TaskComment data={reply} key={reply.id} />
                    ))}
                {replies && showReplies && (
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
