import { useState } from "react";
import "./comment.scss";
import SupportFunction from "../../../support/support_function";
import TaskInputComment from "./inputComment/inputComment";

function TaskComment(props) {
    const {data} = props;
    const replies = data.replies;

    const [showReplies, setShowReplies] = useState(false);
    const [showReplyBox, setShowReplyBox] = useState(false);

    const handlerClickShowMore = () => {
        setShowReplies(!showReplies);
    };

    const handlerClickReply = () => {
        console.log("Reply comment " + data.id);
        setShowReplyBox(!showReplyBox);
    };

    const handlerClickDelete = () => {
        console.log("Delete comment " + data.id);
    };

    const handlerClickEdit = () => {
        console.log("Edit comment " + data.id);
    };

    return (
        <div class="comment-wrapper">
            <img
                alt="commenter avatar"
                src={data.account.avatar}
                class="account-ava"
            />
            <div class="comment-content">
                <h3>{data.account.name}</h3>
                <p>{data.content}</p>
                <div class="comment-button-group">
                    <div
                        class="comment-button-item"
                        onClick={handlerClickDelete}
                    >
                        Delete
                    </div>
                    <div class="comment-button-item" onClick={handlerClickEdit}>
                        Edit
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
