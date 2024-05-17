import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import FakeData from "../../../data/fake_data.json";
import Search from "antd/es/transfer/search";
import ChatBoxContent from "./Component/ChatBoxContent";
import AccountChatIcon from "./Component/AccountChatIcon";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import useAuth from "../../../hooks/useAuth";
import chatApi from "../../../api/chatAPI";

function getValueByKeyId(map, searchId) {
    for (let [key, value] of map.entries()) {
        if (parseInt(key.id) === parseInt(searchId)) {
            return { ...key, chats: value };
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

    useEffect(() => {
        const callApi = async () => {
            connect();
            await chatApi
                .getListChatByToken()
                .then((response) => {
                    const newChatBox = new Map();
                    response.data.forEach((accountData) => {
                        newChatBox.set(
                            {
                                id: accountData.id,
                                account: accountData.account,
                                name: accountData.name,
                                avatar: accountData.avatar,
                                backgroundNoAva: accountData.backgroundNoAva,
                            },
                            accountData.chats
                        );
                    });
                    setChatBox(newChatBox);
                })
                .catch((error) => console.log(error));
            await chatApi
                .getPrivateChat(accountId)
                .then((response) => {
                    // console.log(response);
                })
                .catch((error) => console.log(error));
        };
        callApi();
    }, []);

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
                if (key.name.toLowerCase().includes(search.toLowerCase())) {
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
    const connect =()=>{
        let Sock = new SockJS('http://localhost:8888/ws');
        stompClient = over(Sock);
        stompClient.connect({},onConnected, (error)=>console.log(error));
    }

    const onConnected = () => {
        stompClient.subscribe('/user/'+account.id+'/private', onPrivateMessage);
    }

    const onPrivateMessage = (payload)=>{
        // console.log("payload", payload);
        
        var payloadData = JSON.parse(payload.body);
        console.log(payloadData);

        var keyValue = {
            id: payloadData.id,
            account: payloadData.account,
            name: payloadData.name,
            avatar: payloadData.avatar,
            backgroundNoAva: payloadData.backgroundNoAva,
        }

        if (chatBox.get(keyValue)) {
            console.log(1);
            chatBox.get(keyValue).push(payloadData.chat);
        } else {
            console.log(2);
            let list =[];
            list.push(payloadData.chat);
            chatBox.set(keyValue, list);
        }
        
        setChatBox(chatBox);
    }

    const sendPrivateValue=(receiverId, message)=>{
        var chatMessage = {
          senderId: account.id,
          receiverId: receiverId,
          content: message,
          senderInfo : {
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
          }
        };

        stompClient.send("/app/private-message", {}, JSON.stringify(chatMessage));

        
      }

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
                            chat={value}
                            key={key.id}
                            keyValue={key}
                            selectedAccountId={accountId}
                        />
                    ))}
                </div>
            </div>
            <div class="chat-box-main-content-wrapper">
                {selectedAccount !== null && (
                    <ChatBoxContent data={selectedAccount} sendPrivateValue={sendPrivateValue} />
                )}
            </div>
        </div>
    );
}

export default ChatBox;
