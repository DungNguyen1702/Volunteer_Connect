import React, { useState } from "react";
import AvatarAccount from "../../../../../components/avatar/AvatarAccount";
import SupportFunction from "../../../../../support/support_function";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function AccountChatIcon(props) {
    const { chat, data, keyValue, selectedAccountId } = props;
    
    const navigate = useNavigate();

    const lastestChat = chat[chat.length - 1];
    const onClickAccountChat = () => {
        navigate(`/chat-box/${keyValue}`);
    };

    return (
        <div
            class={`account-chat-icon-wrapper ${
                parseInt(selectedAccountId) == parseInt(keyValue) + "" && "selected-chatbox"
            }`}
            onClick={onClickAccountChat}
        >
            <AvatarAccount
                name={data.name}
                avatar={data.avatar}
                backgroundNoAva={data.backgroundNoAva}
                size={50}
            />
            <div class="account-chat-icon-content-wrapper">
                <p class="font-size-big">{data.name}</p>
                <div class="account-chat-icon-chat-content-date-wrapper">
                    <p>
                        {lastestChat && SupportFunction.TruncateText(lastestChat.content, 17)}
                    </p>
                    <p>{lastestChat && lastestChat.createdAt}</p>
                </div>
            </div>
        </div>
    );
}

export default AccountChatIcon;
