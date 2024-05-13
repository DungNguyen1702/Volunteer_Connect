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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.TableTask;
import com.PBL5.VolunteerConnection.request.TableTaskRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.TableTaskService;

@RestController
@RequestMapping("api/v1/tabletask")
public class TableTaskController {
    @Autowired
    private TableTaskService tableTaskService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createPostComment(@RequestHeader("Authorization") String token,
            @RequestBody TableTaskRequest tableTaskRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(tableTaskService.createTableTask(token, tableTaskRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updatePostComment(@RequestHeader("Authorization") String token,
            @RequestBody TableTaskRequest tableTaskRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(tableTaskService.updateTableTask(token, tableTaskRequest));
    }

    @DeleteMapping("/delete")
    ResponseEntity<StatusResponse> deletePostComment(@RequestHeader("Authorization") String token,
            @RequestBody TableTaskRequest tableTaskRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(tableTaskService.deleteTableTask(token, tableTaskRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<TableTask>> selectAll() {
        return ResponseEntity.ok(tableTaskService.selectAll());
    }

    @GetMapping("/selectTableTaskActivityId")
    ResponseEntity<List<TableTask>> getTableTaskActivityId(@RequestHeader("Authorization") String token,
            @RequestParam("id") int id) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(tableTaskService.selectAllByActivityId(token, id));
    }
}