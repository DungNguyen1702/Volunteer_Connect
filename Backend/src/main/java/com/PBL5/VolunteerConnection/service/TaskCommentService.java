package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.TaskComment;
import com.PBL5.VolunteerConnection.request.TaskCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface TaskCommentService {
    StatusResponse createTaskComment(String token, TaskCommentRequest taskComment);

    StatusResponse updateTaskComment(String token, TaskCommentRequest taskComment);

    StatusResponse deleteTaskComment(String token, TaskCommentRequest taskComment);

    List<TaskComment> selectAll();
}
