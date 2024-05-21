package com.PBL5.VolunteerConnection.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.TaskComment;
import com.PBL5.VolunteerConnection.repository.AccountRepository;
import com.PBL5.VolunteerConnection.repository.TaskCommentRepository;
import com.PBL5.VolunteerConnection.request.TaskCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class TaskCommentServiceImpl implements TaskCommentService {
    @Autowired
    private TaskCommentRepository taskCommentRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private AccountRepository accountRepository;

    @Override
    public StatusResponse createTaskComment(String token, TaskCommentRequest taskComment) {
        // TODO Auto-generated method stub
        try {
            int accountId = jwtService.getId(token);
            TaskComment createTaskComment = new TaskComment(taskComment.getCommentParentId(), taskComment.getContent(),
                    taskComment.getTaskId(), accountId, false);
            if (taskComment.getCommentParentId() != null) {
                System.out.println("ok");
                TaskComment taskComment2 = taskCommentRepository.findById((int) taskComment.getCommentParentId());
                createTaskComment.setParentComment(taskComment2);
            }
            if (accountId != 0) {
                System.out.println("ok");
                Account account = accountRepository.findById(accountId);
                // System.out.println(account.getId());
                // account.getTaskcomments().add(createTaskComment);
                createTaskComment.setAccount(account);
            }
            taskCommentRepository.save(createTaskComment);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.CREATED)
                            .body("TaskComment " + createTaskComment.getContent() + "has been created sucessfully!!"))
                    .data(createTaskComment.getId())
                    .build();
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse deleteTaskComment(String token, TaskCommentRequest taskComment) {
        // TODO Auto-generated method stub
        try {
            int userCommentId = jwtService.getId(token);
            TaskComment deleteComment = taskCommentRepository.findById(taskComment.getId());
            if (deleteComment.getAccountId() == userCommentId) {
                deleteComment.setDeleted(true);
                taskCommentRepository.save(deleteComment);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Comment " + deleteComment.getId() + "has been deleted sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("comment cant not be deleted because you are not owner!!"))
                        .build();
            }
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse updateTaskComment(String token, TaskCommentRequest taskComment) {
        // TODO Auto-generated method stub
        try {
            int userCommentId = jwtService.getId(token);
            TaskComment updateComment = taskCommentRepository.findById(taskComment.getId());
            if (updateComment.getAccountId() == userCommentId) {
                System.out.println("oke");
                ;
                updateComment.setContent(taskComment.getContent());
                updateComment.setUpdatedAt(LocalDate.now());
                taskCommentRepository.save(updateComment);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Comment " + updateComment.getContent() + "has been updated sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Comment cant not be updated because you are not owner!!"))
                        .build();
            }
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
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
