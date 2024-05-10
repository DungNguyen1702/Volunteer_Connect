package com.PBL5.VolunteerConnection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.TaskComment;
import com.PBL5.VolunteerConnection.repository.TaskCommentRepository;
import com.PBL5.VolunteerConnection.request.TaskCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class TaskCommentServiceImpl implements TaskCommentService {
    @Autowired
    private TaskCommentRepository taskCommentRepository;

    @Override
    public StatusResponse createTaskComment(String token, TaskCommentRequest taskComment) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public StatusResponse deleteTaskComment(String token, TaskCommentRequest taskComment) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public StatusResponse updateTaskComment(String token, TaskCommentRequest taskComment) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<TaskComment> selectAll() {
        // TODO Auto-generated method stub
        try {
            List<TaskComment> listTask = taskCommentRepository.findAll();
            return listTask;
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println(e.getMessage());
            return null;
        }
    }
}
