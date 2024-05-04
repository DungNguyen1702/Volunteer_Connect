package com.PBL5.VolunteerConnection.response;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostCommentRequest {
    private String token;
    private int id;
    private int comment_parentId;
    private int postId;
    private String content;
    private int accountId;
    private boolean isDeleted;
}
