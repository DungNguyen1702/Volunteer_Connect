package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Chat;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ChatBoxResponse {
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
    private List<ChatResponse> chats = new ArrayList<>();
    public ChatBoxResponse(Account account, List<Chat> chatList){
        this.id = account.getId();
        this.account =account.getAccount();
        this.name = account.getName();
        this.status = account.getStatus();
        this.role  = account.getRole();
        this.createdAt = account.getCreatedAt() != null ? account.getCreatedAt().toString() : null;
        this.updatedAt = account.getUpdatedAt() != null ? account.getUpdatedAt().toString() : null;
        this.backgroundNoAva = account.getBackgroundNoAva();
        for (Chat chat : chatList){
            this.chats.add(new ChatResponse(chat));
        }

    }
}

