import "./inputComment.scss";
import { useState } from "react";
import { Button } from "antd";
import TextArea from "antd/es/input/TextArea";
import AvatarAccount from "../../../avatar/AvatarAccount";
import useAuth from "../../../../hooks/useAuth";

function TaskInputComment(props) {
    const { account } = useAuth();

    const [inputValue, setInputValue] = useState("");

    const handlerChangeInput = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };

    const handlerClickReply = () => {};

    return (
        <div class="input-comment-wrapper">
            <AvatarAccount
                name={account.name}
                avatar={account.avatar}
                backgroundNoAva={account.backgroundNoAva}
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

export default TaskInputComment;
