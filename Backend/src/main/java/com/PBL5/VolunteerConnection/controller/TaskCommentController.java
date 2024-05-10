package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.TaskComment;
import com.PBL5.VolunteerConnection.service.TaskCommentService;

@RestController
@RequestMapping("api/v1/taskcomment")
public class TaskCommentController {
    @Autowired
    private TaskCommentService taskCommentService;

    @GetMapping("/selectAll")
    ResponseEntity<List<TaskComment>> selectAll() {
        return ResponseEntity.ok(taskCommentService.selectAll());
    }
}
