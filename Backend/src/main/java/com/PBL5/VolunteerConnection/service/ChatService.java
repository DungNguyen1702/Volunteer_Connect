package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.response.ChatBoxResponse;
import org.springframework.stereotype.Service;

import java.util.List;


public interface ChatService {
    List<ChatBoxResponse> getAllChatBox(String token);
}
