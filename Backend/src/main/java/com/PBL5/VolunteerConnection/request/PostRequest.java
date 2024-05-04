package com.PBL5.VolunteerConnection.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostRequest {
    private String token;
    private int id;
    private int accountId;
    private int activityId;
    private String title;
    private String image;
    private String content;
}
