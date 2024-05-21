import { useContext, useEffect, useState } from "react";
import "./comment.scss";
import SupportFunction from "../../../support/support_function";
import InputComment from "./inputComment/inputComment";
import AvatarAccount from "../../avatar/AvatarAccount";
import useAuth from "../../../hooks/useAuth";
import TextArea from "antd/es/input/TextArea";
import { PostDetailContext } from "../../../views/pages/PostDetail";

function Comment(props) {
    const { data } = props;
    const replies = data.replies;

    const { account } = useAuth();

    const { setComments, updatePostComment, deletePostComment, listComment } =
        useContext(PostDetailContext);

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
        setShowReplyBox(!showReplyBox);
    };

    const handlerClickDelete = () => {
        setComments(deletePostComment(listComment, data.id));
    };

    const handlerClickEdit = async () => {
        if (isEdit) {
            setComments(
                updatePostComment(
                    listComment,
                    {
                        content,
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
            <AvatarAccount
                name={data.account.name}
                avatar={data.account.avatar}
                backgroundNoAva={data.account.backgroundNoAva}
                size={"40px"}
            />

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
                    <p class="post-comment-content">{content}</p>
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
                    {account && (
                        <div
                            class="comment-button-item"
                            onClick={handlerClickReply}
                        >
                            Reply
                        </div>
                    )}
                </div>

                {/* reply box */}
                <div>
                    {showReplyBox && (
                        <InputComment
                            data={data}
                            setShowReplyBox={setShowReplyBox}
                        />
                    )}
                </div>

                {replies.length !== 0 && !showReplies && (
                    <p
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
                    </p>
                )}
                {replies.length !== 0 &&
                    showReplies &&
                    replies.map((reply) => (
                        <Comment data={reply} key={reply.id} />
                    ))}
                {replies.length !== 0 && showReplies && (
                    <p
                        className="comment-button-item"
                        style={{
                            marginTop: "0px",
                            marginLeft: "0px",
                            marginBottom: "10px",
                        }}
                        onClick={handlerClickShowMore}
                    >
                        Show less
                    </p>
                )}
            </div>
        </div>
    );
}

export default Comment;
