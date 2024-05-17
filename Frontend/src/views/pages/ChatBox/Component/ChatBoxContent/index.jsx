import React, { useState } from "react";
import AvatarAccount from "../../../../../components/avatar/AvatarAccount";
import useAuth from "../../../../../hooks/useAuth";
import ChatBar from "../ChatBar";
import './index.scss'
import UserIcon from '../../../../../components/user/index'
import TextArea from "antd/es/input/TextArea";
import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

function ChatBoxContent(props) {
    const { data, sendPrivateValue } = props;
    const { account } = useAuth();

    const [chat, setChat] = useState('');

    const onClickSend = ()=>{
        sendPrivateValue(data.id, chat);
        setChat('');
    }

    const onChangeChat = (e)=>{
        setChat(e.target.value)
    };

    return (
        <div class="chat-box-content-wrapper">
            <div class="chat-box-content-header">
                <UserIcon
                    name={data.name}
                    avatar={data.avatar}
                    backgroundNoAva={data.backgroundNoAva}
                    size={70}
                    id={data.id}
                    role={data.role}
                />
            </div>
            <div class="chat-box-main-chat-content">
                {data.chats.map(chat => <ChatBar 
                    data={chat}
                    isAccount={chat.senderId === account.id ? true : false}
                    chattingAccount={data}
                />)}
            </div>
            <div class="chat-box-content-footer">
                <div className="chat-box-content-footer-wrapper">
                    <TextArea
                        autoSize={{ minRows: 1, maxRows: 3 }}
                        placeholder="Enter a chat line"
                        value={chat}
                        onChange={onChangeChat}
                        className="chat-box-content-text-area"
                    />
                    <Button
                        className="button-send"
                        icon={<SendOutlined/>}
                        onClick={onClickSend}
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatBoxContent;
