package com.PBL5.VolunteerConnection.request;


import com.PBL5.VolunteerConnection.response.AccountResponse;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MessageRequest {
    private int senderId;
    private int receiverId;
    private String content;
    private AccountResponse senderInfo;
}
