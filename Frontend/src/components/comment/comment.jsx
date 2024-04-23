import { useEffect, useState } from "react";
import "./comment.scss";
import SupportFunction from "../../support/support_function";
import InputComment from "./inputComment/inputComment";

function Comment(props) {
    const data = props.data;
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
                <div> 
                    {showReplyBox && <InputComment data={data}/>}
                </div>

                {replies && !showReplies && <p
                    className="comment-button-item"
                    style={{
                        marginTop: "0px",
                        marginLeft: "0px",
                        marginBottom: "10px",
                    }}
                    onClick={handlerClickShowMore}
                >
                    Show{" "}
                    {SupportFunction.getStringReply(
                        replies ? replies.length : 0
                    )}
                </p>}
                {replies && showReplies 
                    && replies.map((reply) => (
                        <Comment data={reply} key={reply.id} />
                    ))}
                {replies && showReplies && <p
                    className="comment-button-item"
                    style={{
                        marginTop: "0px",
                        marginLeft: "0px",
                        marginBottom: "10px",
                    }}
                    onClick={handlerClickShowMore}
                >
                    Show less
                </p>}
            </div>
        </div>
    );
}

export default Comment;
