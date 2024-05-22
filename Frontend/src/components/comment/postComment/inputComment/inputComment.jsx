import "./inputComment.scss";
import { useContext, useState } from "react";
import { Button } from "antd";
import AvatarAccount from "../../../avatar/AvatarAccount";
import useAuth from "../../../../hooks/useAuth";
import TextArea from "antd/es/input/TextArea";
import SupportFunction from "../../../../support/support_function";
import { PostDetailContext } from "../../../../views/pages/PostDetail";

function InputComment(props) {
    const { data, setShowReplyBox } = props;
    const { addPostComment, listComment, postId, setComments } =
        useContext(PostDetailContext);

    const [inputValue, setInputValue] = useState("");

    const { account } = useAuth();

    const handlerChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handlerClickReply = async () => {
        if (data) {
            const newPostComments = await addPostComment(listComment, {
                id: -1,
                comment_parentId: data.id,
                postId: postId,
                content: inputValue,
                account: account,
                accountId: account.id,
                createdAt: SupportFunction.convertStringToArray(
                    SupportFunction.getCurrentlyDate()
                ),
                updatedAt: null,
                replies: [],
                deleted: false,
            });

            console.log(newPostComments);

            setComments(newPostComments);
            setShowReplyBox(false);
        } else {
            const newPostComments = await addPostComment(listComment, {
                id: -1,
                comment_parentId: null,
                postId: postId,
                content: inputValue,
                account: account,
                accountId: account.id,
                createdAt: SupportFunction.convertStringToArray(
                    SupportFunction.getCurrentlyDate()
                ),
                updatedAt: null,
                replies: [],
                deleted: false,
            });

            setComments(newPostComments);
            setInputValue("");
        }
    };

    return (
        <div class="input-comment-wrapper">
            {account && (
                <AvatarAccount
                    name={account.name}
                    avatar={account.avatar}
                    backgroundNoAva={account.backgroundNoAva}
                    size={"40px"}
                />
            )}
            <TextArea
                className="reply-input"
                placeholder="Comment"
                value={inputValue}
                onChange={handlerChangeInput}
                autoSize
            />
            <Button className="reply-button" onClick={handlerClickReply}>
                <p>Save</p>
            </Button>
        </div>
    );
}

export default InputComment;
