import "./inputComment.scss";
import { useContext, useState } from "react";
import { Button } from "antd";
import AvatarAccount from "../../../avatar/AvatarAccount";
import useAuth from "../../../../hooks/useAuth";
import TextArea from "antd/es/input/TextArea";
import SupportFunction from "../../../../support/support_function"
import { PostDetailContext } from "../../../../views/pages/PostDetail";

function InputComment(props) {
    const { data, setShowReplyBox} = props;
    const { addPostComment, listComment, postId, setComments } = useContext(PostDetailContext)

    const [inputValue, setInputValue] = useState("");

    const { account } = useAuth();

    const handlerChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handlerClickReply = () => {
        if (data) {
            setComments(addPostComment(listComment, {
                id: -1,
                comment_parentId: data.id,
                postId: postId,
                content: inputValue,
                account: account,
                accountId: account.id,
                createdAt: SupportFunction.convertStringToArray(SupportFunction.getCurrentlyDate()),
                updatedAt: null,
                replies: [],
                deleted: false,
            }));
            setShowReplyBox(false);
        } else {
            setComments(addPostComment(listComment, {
                id: -1,
                comment_parentId: null,
                postId: postId,
                content: inputValue,
                account: account,
                accountId: account.id,
                createdAt: SupportFunction.convertStringToArray(SupportFunction.getCurrentlyDate()),
                updatedAt: null,
                replies: [],
                deleted: false,
            }));
            setInputValue('');
        }
    };

    return (
        <div class="input-comment-wrapper">
            <AvatarAccount
                name={account && account.name}
                avatar={account && account.avatar}
                backgroundNoAva={account && account.backgroundNoAva}
                size={"40px"}
            />
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
