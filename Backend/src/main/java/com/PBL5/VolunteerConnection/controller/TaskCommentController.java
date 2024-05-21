package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.TaskComment;
import com.PBL5.VolunteerConnection.request.TaskCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.TaskCommentService;

@RestController
@RequestMapping("api/v1/taskcomment")
public class TaskCommentController {
    @Autowired
    private TaskCommentService taskCommentService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createTaskComment(@RequestHeader("Authorization") String token,
            @RequestBody TaskCommentRequest TaskCommentRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(taskCommentService.createTaskComment(token, TaskCommentRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updateTaskComment(@RequestHeader("Authorization") String token,
            @RequestBody TaskCommentRequest TaskCommentRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(taskCommentService.updateTaskComment(token, TaskCommentRequest));
    }

    @PostMapping("/delete")
    ResponseEntity<StatusResponse> deleteTaskComment(@RequestHeader("Authorization") String token,
            @RequestBody TaskCommentRequest TaskCommentRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(taskCommentService.deleteTaskComment(token, TaskCommentRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<TaskComment>> selectAll() {
        return ResponseEntity.ok(taskCommentService.selectAll());
    }
}
