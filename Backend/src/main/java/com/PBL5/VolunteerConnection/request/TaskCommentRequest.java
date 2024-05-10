package com.PBL5.VolunteerConnection.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskCommentRequest {
    private int id;
    private Integer commentParentId;
    private int taskId;
    private String content;
    private int accountId;
    private boolean isDeleted;
}
