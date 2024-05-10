package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.Task;
import com.PBL5.VolunteerConnection.service.TaskService;

@RestController
@RequestMapping("api/v1/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @GetMapping("/selectAll")
    ResponseEntity<List<Task>> selectAll() {
        return ResponseEntity.ok(taskService.selectAll());
    }
}
