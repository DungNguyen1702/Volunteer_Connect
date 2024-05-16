package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.Task;
import com.PBL5.VolunteerConnection.request.TaskRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.TaskService;

@RestController
@RequestMapping("api/v1/task")
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("/create")
    ResponseEntity<String> createTask(@RequestHeader("Authorization") String token,
            @RequestBody TaskRequest taskRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(taskService.createTask(token, taskRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updateTask(@RequestHeader("Authorization") String token,
            @RequestBody TaskRequest taskRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(taskService.updateTask(token, taskRequest));
    }

    @PostMapping("/delete")
    ResponseEntity<StatusResponse> deleteTask(@RequestHeader("Authorization") String token,
            @RequestBody TaskRequest taskRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(taskService.deleteTask(token, taskRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<Task>> selectAll() {
        return ResponseEntity.ok(taskService.selectAll());
    }
}
