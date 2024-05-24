package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.request.MessageRequest;
import com.PBL5.VolunteerConnection.response.ChatBoxResponse;
import com.PBL5.VolunteerConnection.response.MessageResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/chat")
public class ChatController {
    @Autowired
    private ChatService chatService;
    @Autowired
    private SimpMessagingTemplate messagingTemplate;
    @GetMapping("/selectAll")
    ResponseEntity<List<ChatBoxResponse>> selectAllChatBox(@RequestHeader("Authorization") String token, @RequestParam("id") int id) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(chatService.getAllChatBoxByAccountId(token, id));
    }
    
//    @GetMapping("/selectPrivateChat")
//    ResponseEntity<List<ChatBoxResponse>> selectAllPrivateChatBox(@RequestHeader("Authorization") String token, @RequestParam("id") int id) {
//        token = token.substring("Bearer ".length());
//        return ResponseEntity.ok(chatService.getAllPrivateChatBox(token, id));
//    }

    @MessageMapping("/private-message")
    ChatBoxResponse receivePrivateMessage(@Payload MessageRequest message){
        MessageResponse messageResponse = chatService.saveAndSend(message);
        ChatBoxResponse chatBoxResponse = chatService.getAllPrivateChatBox(message.getReceiverId(), message.getSenderId());
        System.out.print(messageResponse.getChat().getContent());
        messagingTemplate.convertAndSendToUser(String.valueOf(message.getReceiverId()), "/private", chatBoxResponse);  //user/userName/private
        return chatBoxResponse;
    }
}
