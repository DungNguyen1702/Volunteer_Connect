package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.dto.ChatBoxDTO;
import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Chat;
import com.PBL5.VolunteerConnection.repository.ChatRepository;
import com.PBL5.VolunteerConnection.response.ChatBoxResponse;
import com.PBL5.VolunteerConnection.response.ChatResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class ChatServiceImpl implements ChatService{
    @Autowired
    private ChatRepository chatRepository;
    @Autowired
    private JwtService jwtService;
    @Override
    public List<ChatBoxResponse> getAllChatBox(String token) {
        int accountId = jwtService.getId(token);
        List<ChatBoxResponse> chatBoxResponses = new ArrayList<>();
        List<ChatBoxDTO> chatBoxDTOS = chatRepository.findAllByAccountId(accountId);
        List<Account> accountList = new ArrayList<>();
        Map<Integer, List<Chat>> chatList = new HashMap<>();
        for(ChatBoxDTO chatBoxDTO: chatBoxDTOS){
            if(chatBoxDTO.getChat().getReceiverId() == accountId){
                accountList.add(chatBoxDTO.getSender());
                int senderId = chatBoxDTO.getSender().getId();
                if(chatList.containsKey(senderId)){
                    System.out.println("Lan 1");
                    chatList.get(senderId).add(chatBoxDTO.getChat());
                }
                else{
                    List<Chat> chats = new ArrayList<>();
                    chats.add(chatBoxDTO.getChat());
                    chatList.put(senderId, chats);
                }
                System.out.println(chatList.get(chatBoxDTO.getSender().getId()));
            }
            else if (chatBoxDTO.getChat().getSenderId() == accountId){
                accountList.add(chatBoxDTO.getReceiver());
                int receiverId = chatBoxDTO.getReceiver().getId();
                if(chatList.containsKey(receiverId)){
                    chatList.get(receiverId).add(chatBoxDTO.getChat());
                }
                else{
                    List<Chat> chats = new ArrayList<>();
                    chats.add(chatBoxDTO.getChat());
                    chatList.put(receiverId, chats);
                }
            }

        }

        for(int i = 0; i < accountList.size(); i ++){
            chatBoxResponses.add(new ChatBoxResponse(accountList.get(i), chatList.get(accountList.get(i).getId())));
        }
        return chatBoxResponses;

    }
}
