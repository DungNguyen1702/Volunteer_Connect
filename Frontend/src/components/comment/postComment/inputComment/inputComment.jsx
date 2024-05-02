import "./inputComment.scss";
import fakeData from "../../../../data/fake_data.json";
import { useState } from "react";
import { Button } from "antd";

function InputComment(props) {
    const data = props.data;
    const user = fakeData.Accounts[0];
    const [inputValue, setInputValue] = useState("");

    const handlerChangeInput = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };

    const handlerClickReply = () => {};

    return (
        <div class="input-comment-wrapper">
            <img alt="replier-ava" src={user.avatar} class="replier-ava" />
            <input
                type="text"
                class="reply-input"
                placeholder="Comment"
                value={inputValue}
                onChange={handlerChangeInput}
            />
            <Button className="reply-button" onClick={handlerClickReply}>
                <p>Save</p>
            </Button>
        </div>
    );
}

export default InputComment;
