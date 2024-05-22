import "./inputComment.scss";
import { useContext, useEffect, useState } from "react";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import AvatarAccount from "../../../avatar/AvatarAccount";
import useAuth from "../../../../hooks/useAuth";
import { TaskDetailContext } from "../../../../views/pages/ActivityDetail/TaskManagement/StatusTable/Task";
import SupportFunction from "../../../../support/support_function";

function TaskInputComment(props) {
    const { data, setShowReplyBox } = props;
    const { addTaskComment, taskComments, setTaskComments, taskId } =
        useContext(TaskDetailContext);

    const { account } = useAuth();

    const [inputValue, setInputValue] = useState("");

    const handlerChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handlerClickReply = async () => {
        if (data) {
            setTaskComments(
                await addTaskComment(taskComments, {
                    id: -1,
                    comment_parentId: data.id,
                    content: inputValue,
                    taskId: taskId,
                    accountId: account.id,
                    account: account,
                    createdAt: SupportFunction.convertStringToArray(
                        SupportFunction.getCurrentlyDate()
                    ),
                    updatedAt: null,
                    replies: [],
                })
            );
            setShowReplyBox(false);
        } else {
            setTaskComments(
                await addTaskComment(taskComments, {
                    id: -1,
                    comment_parentId: null,
                    content: inputValue,
                    taskId: taskId,
                    accountId: account.id,
                    account: account,
                    createdAt: SupportFunction.convertStringToArray(
                        SupportFunction.getCurrentlyDate()
                    ),
                    updatedAt: null,
                    replies: [],
                })
            );
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

export default TaskInputComment;
