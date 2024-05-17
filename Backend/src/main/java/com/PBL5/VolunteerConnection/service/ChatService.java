package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.request.MessageRequest;
import com.PBL5.VolunteerConnection.response.ChatBoxResponse;
import com.PBL5.VolunteerConnection.response.MessageResponse;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ChatService {
    List<ChatBoxResponse> getAllChatBoxByAccountId(String token, int id);
    ChatBoxResponse getAllPrivateChatBox(int accountId , int id);
    MessageResponse saveAndSend(MessageRequest messageRequest);
}
