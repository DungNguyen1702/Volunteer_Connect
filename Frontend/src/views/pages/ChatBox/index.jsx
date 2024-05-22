import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Search from "antd/es/transfer/search";
import ChatBoxContent from "./Component/ChatBoxContent";
import AccountChatIcon from "./Component/AccountChatIcon";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import useAuth from "../../../hooks/useAuth";
import chatApi from "../../../api/chatAPI";
import SupportFunction from "../../../support/support_function";

function getValueByKeyId(map, searchId) {
    for (let [key, value] of map.entries()) {
        if (parseInt(key) === parseInt(searchId)) {
            return { ...value, id: parseInt(key) };
        }
    }
    return null;
}

var stompClient = null;

function ChatBox() {
    const { accountId } = useParams();

    const { account } = useAuth();

    const [chatBox, setChatBox] = useState(new Map());

    // Search
    const [listAccountChat, setListAccountChat] = useState(chatBox);
    const [search, setSearch] = useState("");

    const [selectedAccount, setSelectedAccount] = useState(null);
    // const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const callApi = async () => {
            await connect();
            await chatApi
                .getListChatByToken(accountId === "null" ? 0 : accountId)
                .then((response) => {
                    const newChatBox = new Map();
                    response.data.forEach((accountData) => {
                        newChatBox.set(parseInt(accountData.id), {
                            account: accountData.account,
                            name: accountData.name,
                            avatar: accountData.avatar,
                            backgroundNoAva: accountData.backgroundNoAva,
                            chats: accountData.chats,
                        });
                    });
                    setChatBox(new Map(newChatBox));
                })
                .catch((error) => console.log(error));
        };
        callApi();
    }, [accountId]);

    useEffect(() => {
        setSelectedAccount(getValueByKeyId(chatBox, accountId));
    }, [accountId, chatBox]);

    useEffect(() => {
        setListAccountChat(new Map(chatBox));
    }, [chatBox]);

    useEffect(() => {
        if (search === "") {
            setListAccountChat(new Map(chatBox));
        } else {
            const filteredChatBox = new Map();
            chatBox.forEach((value, key) => {
                if (value.name.toLowerCase().includes(search.toLowerCase())) {
                    filteredChatBox.set(key, value);
                }
            });
            setListAccountChat(filteredChatBox);
        }
    }, [search, chatBox]);

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    // Socket
    const connect = () => {
        return new Promise((resolve, reject) => {
            const serverUrl = "http://localhost:8888/ws"; // Update with your actual server URL
            const Sock = new SockJS(serverUrl);
            stompClient = over(Sock);

            stompClient.connect(
                {},
                () => {
                    onConnected();
                    resolve();
                },
                (error) => {
                    console.error("WebSocket connection error:", error);
                    reject(error);
                }
            );
        });
    };

    const onConnected = () => {
        try {
            stompClient.subscribe(
                "/user/" + account.id + "/private",
                onPrivateMessage
            );
        } catch (error) {
            console.log(error);
        }
    };

    const onPrivateMessage = (payload) => {
        var payloadData = JSON.parse(payload.body);

        console.log(payloadData);
        var keyValue = payloadData.id;

        var valueData = {
            account: payloadData.account,
            name: payloadData.name,
            avatar: payloadData.avatar,
            backgroundNoAva: payloadData.backgroundNoAva,
            chats: payloadData.chats ? payloadData.chats : [],
        };

        const newChatBox = new Map(chatBox);
        newChatBox.set(keyValue, valueData);

        setChatBox(newChatBox);
    };

    const sendPrivateValue = (receiverId, message) => {
        var chatMessage = {
            senderId: account.id,
            receiverId: receiverId,
            content: message,
            senderInfo: {
                id: account.id,
                account: account.account,
                name: account.name,
                avatar: account.avatar,
                status: account.status,
                role: account.role,
                createdAt: account.createdAt,
                updatedAt: account.updatedAt,
                isDeleted: account.isDeleted,
                backgroundNoAva: account.backgroundNoAva,
            },
        };

        const newChatBox = new Map(chatBox);
        const valueData = chatBox.get(receiverId);
        newChatBox.set(receiverId, {
            ...valueData,
            chats: [
                ...valueData.chats,
                {
                    senderId: account.id,
                    receiverId: receiverId,
                    content: message,
                    createdAt: SupportFunction.getCurrentDateTime(),
                },
            ],
        });

        setChatBox(newChatBox);

        stompClient.send(
            "/app/private-message",
            {},
            JSON.stringify(chatMessage)
        );
    };

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
                    {[...listAccountChat.entries()].map(([key, value]) => (
                        <AccountChatIcon
                            chat={value.chats}
                            data={value}
                            key={key}
                            keyValue={key}
                            selectedAccountId={accountId}
                        />
                    ))}
                </div>
            </div>
            <div class="chat-box-main-content-wrapper">
                {selectedAccount !== null && (
                    <ChatBoxContent
                        data={selectedAccount}
                        sendPrivateValue={sendPrivateValue}
                    />
                )}
            </div>
        </div>
    );
}

export default ChatBox;
