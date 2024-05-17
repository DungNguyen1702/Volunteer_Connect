package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Chat;
import com.PBL5.VolunteerConnection.request.MessageRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MessageResponse {
    private int id;
    private String account;
    private String name;
    private String avatar;
    private Boolean status;
    private int role;
    private String createdAt;
    private String updatedAt;
    private Boolean isDeleted;
    private String backgroundNoAva;
    private ChatResponse chat;
    public MessageResponse(MessageRequest messageRequest, Chat chat){
        this.id = messageRequest.getSenderInfo().getId();
        this.account = messageRequest.getSenderInfo().getAccount();
        this.name = messageRequest.getSenderInfo().getName();
        this.avatar = messageRequest.getSenderInfo().getAvatar();
        this.status = messageRequest.getSenderInfo().getStatus();
        this.role = messageRequest.getSenderInfo().getRole();
        this.createdAt = messageRequest.getSenderInfo().getCreatedAt();
        this.updatedAt = messageRequest.getSenderInfo().getUpdatedAt();
        this.backgroundNoAva = messageRequest.getSenderInfo().getBackgroundNoAva();
        this.chat = new ChatResponse(chat);
//        this.id = messageRequest.getSenderInfo().getId();
    }
}
