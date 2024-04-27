package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.response.ActivityRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.Activity;

import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.ActivityService;

@RestController
@RequestMapping("api/v1/activity")
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createActivity(@RequestBody ActivityRequest activityRequest) {
        return ResponseEntity.ok(activityService.createActivity(activityRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updatePost(@RequestBody ActivityRequest activityRequest) {
        return ResponseEntity.ok(activityService.updateActivity(activityRequest));
    }

    @DeleteMapping("/delete")
    ResponseEntity<StatusResponse> deletePost(@RequestBody ActivityRequest activityRequest) {
        return ResponseEntity.ok(activityService.deleteActivity(activityRequest));
    }
}
