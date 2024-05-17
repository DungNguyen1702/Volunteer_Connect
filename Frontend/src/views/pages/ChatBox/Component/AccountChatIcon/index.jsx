import React, { useState } from "react";
import AvatarAccount from "../../../../../components/avatar/AvatarAccount";
import SupportFunction from "../../../../../support/support_function";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function AccountChatIcon(props) {
    const { chat, keyValue, selectedAccountId } = props;
    const navigate = useNavigate();

    const lastestChat = chat[chat.length - 1];
    const onClickAccountChat = () => {
        // setSelectedAccount(data);
        navigate(`/chat-box/${keyValue.id}`);
    };

    return (
        <div
            class={`account-chat-icon-wrapper ${
                selectedAccountId === keyValue.id + "" && "selected-chatbox"
            }`}
            onClick={onClickAccountChat}
        >
            <AvatarAccount
                name={keyValue.name}
                avatar={keyValue.avatar}
                backgroundNoAva={keyValue.backgroundNoAva}
                size={50}
            />
            <div class="account-chat-icon-content-wrapper">
                <p class="font-size-big">{keyValue.name}</p>
                <div class="account-chat-icon-chat-content-date-wrapper">
                    <p>
                        {SupportFunction.TruncateText(lastestChat.content, 17)}
                    </p>
                    <p>{lastestChat.createdAt}</p>
                </div>
            </div>
        </div>
    );
}

export default AccountChatIcon;
