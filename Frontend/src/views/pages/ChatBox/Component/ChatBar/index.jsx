import React from "react";
import "./index.scss";
import AvatarAccount from "../../../../../components/avatar/AvatarAccount";

function ChatBar(props) {
    const { data, isAccount, chattingAccount } = props;

    return (
        <div class={`chat-bar-wrapper ${isAccount && 'justify-right'}`}>
            {!isAccount && (
                    <AvatarAccount
                        name={chattingAccount.name}
                        avatar={chattingAccount.avatar}
                        backgroundNoAva={chattingAccount.backgroundNoAva}
                        size={50}
                    />
                )}
            <div class="chat-bar-content-wrapper">
                <p class='chat-bar-content'>{data.content}</p>
                <p class='chat-bar-date-chat'>{data.createdAt}</p>
            </div>
        </div>
    );
}

export default ChatBar;
