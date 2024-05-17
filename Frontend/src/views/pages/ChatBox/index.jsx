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
                                createdAt: accountData.createdAt,
                            },
                            accountData.chats
                        );
                    });
                    setChatBox(newChatBox);
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
    // const [chatUser, setChatUser] = useState({
    //     senderId : account.id,
    //     receiver_id : selectedAccount ? selectedAccount.id : null,
    //     content: "",
    //     connected : false,
    // });

    // const connect =()=>{
    //     let Sock = new SockJS('http://localhost:8080/ws');
    //     stompClient = over(Sock);
    //     stompClient.connect({},onConnected, (error)=>console.log(error));
    // }

    // const onConnected = () => {
    //     setChatUser({...chatUser,"connected": true});
    //     stompClient.subscribe('/user/'+chatUser.senderId+'/private', onPrivateMessage);
    // }

    // const onPrivateMessage = (payload)=>{
    //     console.log("payload", payload);
    //     var payloadData = JSON.parse(payload.body);
    //     if(privateChats.get(payloadData.senderName)){
    //         privateChats.get(payloadData.senderName).push(payloadData);
    //         setPrivateChats(new Map(privateChats));
    //     }else{
    //         let list =[];
    //         list.push(payloadData);
    //         privateChats.set(payloadData.senderName,list);
    //         setPrivateChats(new Map(privateChats));
    //     }
    // }

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
                    <ChatBoxContent data={selectedAccount} />
                )}
            </div>
        </div>
    );
}

export default ChatBox;
