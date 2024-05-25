package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Chat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.format.DateTimeFormatter;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatResponse {
    private int id;
    private int senderId;
    private int receiverId;
    private String content;
    private String createdAt;

    public ChatResponse(Chat chat) {
        this.id = chat.getId();
        this.senderId = chat.getSenderId();
        this.receiverId = chat.getReceiverId();
        this.content = chat.getContent();
        this.createdAt = chat.getCreatedAt() != null ? chat.getCreatedAt().format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm")) : null;

    }


}
