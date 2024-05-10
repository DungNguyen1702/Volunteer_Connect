package com.PBL5.VolunteerConnection.response;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
public class PostCommentDetailResponse {

    private int id;
    private Integer comment_parentId;
    private int postId;
    private String content;
    private int accountId;
    private String createdAt;
    private String updatedAt;
    private AccountResponse accountResponse;
    private List<PostCommentDetailResponse> replies;
}

