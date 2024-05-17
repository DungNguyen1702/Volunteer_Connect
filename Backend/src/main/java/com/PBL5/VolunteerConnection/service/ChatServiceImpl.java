package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.dto.ChatBoxDTO;
import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Chat;
import com.PBL5.VolunteerConnection.repository.AccountRepository;
import com.PBL5.VolunteerConnection.repository.ChatRepository;
import com.PBL5.VolunteerConnection.request.MessageRequest;
import com.PBL5.VolunteerConnection.response.ChatBoxResponse;
import com.PBL5.VolunteerConnection.response.ChatResponse;
import com.PBL5.VolunteerConnection.response.MessageResponse;
import jakarta.persistence.Column;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;

@Service
public class ChatServiceImpl implements ChatService{
    @Autowired
    private ChatRepository chatRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AccountRepository accountRepository;
    @Override
    public List<ChatBoxResponse> getAllChatBoxByAccountId(String token, int id) {
        int accountId = jwtService.getId(token);
        List<ChatBoxResponse> chatBoxResponses = new ArrayList<>();
        List<ChatBoxDTO> chatBoxDTOS = chatRepository.findAllByAccountId(accountId);
        List<Account> accountList = new ArrayList<>();
        Map<Integer, List<Chat>> chatList = new HashMap<>();
        for(ChatBoxDTO chatBoxDTO: chatBoxDTOS){
            if(chatBoxDTO.getChat().getReceiverId() == accountId){

                int senderId = chatBoxDTO.getSender().getId();
                if(chatList.containsKey(senderId)){
                    chatList.get(senderId).add(chatBoxDTO.getChat());
                }
                else{
                    accountList.add(chatBoxDTO.getSender());
                    List<Chat> chats = new ArrayList<>();
                    chats.add(chatBoxDTO.getChat());
                    chatList.put(senderId, chats);
                }
                System.out.println(chatList.get(chatBoxDTO.getSender().getId()));
            }
            else if (chatBoxDTO.getChat().getSenderId() == accountId){

                int receiverId = chatBoxDTO.getReceiver().getId();
                if(chatList.containsKey(receiverId)){
                    chatList.get(receiverId).add(chatBoxDTO.getChat());
                }
                else{
                    accountList.add(chatBoxDTO.getReceiver());
                    List<Chat> chats = new ArrayList<>();
                    chats.add(chatBoxDTO.getChat());
                    chatList.put(receiverId, chats);
                }
            }

        }
        if (id != 0){
            chatBoxResponses.add(new ChatBoxResponse(accountRepository.findById(id), null));
        }
        for (Account account : accountList) {
            chatBoxResponses.add(new ChatBoxResponse(account, chatList.get(account.getId())));
        }
        return chatBoxResponses;

    }

    @Override
    public List<ChatBoxResponse> getAllPrivateChatBox(String token, int id) {
        int accountId = jwtService.getId(token);
        List<ChatBoxResponse> chatBoxResponses = new ArrayList<>();
        List<ChatBoxDTO> chatBoxDTOS = chatRepository.findAllBySenderIdAndReceiverId(accountId, id);
        List<Account> accountList = new ArrayList<>();
        Map<Integer, List<Chat>> chatList = new HashMap<>();
        for(ChatBoxDTO chatBoxDTO: chatBoxDTOS){
            if(chatBoxDTO.getChat().getReceiverId() == accountId){
                int senderId = chatBoxDTO.getSender().getId();
                if(chatList.containsKey(senderId)){
                    chatList.get(senderId).add(chatBoxDTO.getChat());
                }
                else{
                    accountList.add(chatBoxDTO.getSender());
                    List<Chat> chats = new ArrayList<>();
                    chats.add(chatBoxDTO.getChat());
                    chatList.put(senderId, chats);
                }
//                System.out.println(chatList.get(chatBoxDTO.getSender().getId()));
            }
            else if (chatBoxDTO.getChat().getSenderId() == accountId){
                int receiverId = chatBoxDTO.getReceiver().getId();
                if(chatList.containsKey(receiverId)){
                    chatList.get(receiverId).add(chatBoxDTO.getChat());
                }
                else{
                    accountList.add(chatBoxDTO.getReceiver());
                    List<Chat> chats = new ArrayList<>();
                    chats.add(chatBoxDTO.getChat());
                    chatList.put(receiverId, chats);
                }
            }
        }

        for (Account account : accountList) {
            chatBoxResponses.add(new ChatBoxResponse(account, chatList.get(account.getId())));
        }
        return chatBoxResponses;
    }


    @Override
    public MessageResponse saveAndSend(MessageRequest messageRequest) {
        Chat chat = new Chat(messageRequest.getSenderId(), messageRequest.getReceiverId(), messageRequest.getContent(), LocalDate.now());
        chatRepository.save(chat);
        MessageResponse messageResponse = new MessageResponse(messageRequest, chat);
        return messageResponse;
    }
}
