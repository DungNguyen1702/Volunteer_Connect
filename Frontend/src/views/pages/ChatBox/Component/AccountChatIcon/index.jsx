import React, { useState } from "react";
import AvatarAccount from "../../../../../components/avatar/AvatarAccount";
import SupportFunction from "../../../../../support/support_function";
import "./index.scss";
import { useNavigate } from "react-router-dom";

function AccountChatIcon(props) {
    const { data, selectedAccountId } = props;
    const navigate = useNavigate();

    const lastestChat = data.Chats[0];
    const onClickAccountChat = () => {
        // setSelectedAccount(data);
        navigate(`/chat-box/${data.id}`);
    };

    return (
        <div
            class={`account-chat-icon-wrapper ${
                selectedAccountId === data.id + "" && "selected-chatbox"
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
                        {SupportFunction.TruncateText(lastestChat.content, 20)}
                    </p>
                    <p>{lastestChat.createdAt}</p>
                </div>
            </div>
        </div>
    );
}

export default AccountChatIcon;
