import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import FakeData from "../../../data/fake_data.json";
import Search from "antd/es/transfer/search";
import ChatBoxContent from "./Component/ChatBoxContent";
import AccountChatIcon from "./Component/AccountChatIcon";

function ChatBox() {
    const { accountId } = useParams();

    const [chatBox, setChatBox] = useState(FakeData["Chat-Box"]);
    const [listAccountChat, setListAccountChat] = useState(chatBox);
    const [search, setSearch] = useState("");
    const selectedAccount =
        accountId !== "null" &&
        chatBox.find((chat) => chat.id + "" === accountId);

    console.log(selectedAccount);

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        
        if (search === "") {
            setListAccountChat(chatBox);
        }
        else {
            setListAccountChat(chatBox.filter(accountChat => accountChat.name.toLowerCase().includes(search.toLowerCase())))
        }

    }, [search, chatBox]);

    return (
        <div class="chat-box-wrapper">
            <div class="chat-box-list-sender-wrapper">
                <h2 class="chat-box-title">Message</h2>
                <Search
                    value={search}
                    onChange={onChangeSearch}
                    className="chat-box-search-input"
                    placeholder="Input a account name"
                />
                <div class="chat-box-account-list">
                    {listAccountChat.map((chat) => (
                        <AccountChatIcon
                            data={chat}
                            selectedAccountId={accountId}
                        />
                    ))}
                </div>
            </div>
            <div class="chat-box-main-content-wrapper">
                {accountId !== "null" && (
                    <ChatBoxContent data={selectedAccount} />
                )}
            </div>
        </div>
    );
}

export default ChatBox;
