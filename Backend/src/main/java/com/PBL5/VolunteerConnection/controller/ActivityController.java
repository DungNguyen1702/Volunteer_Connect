package com.PBL5.VolunteerConnection.controller;

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
    ResponseEntity<StatusResponse> createActivity(@RequestBody Activity activity) {
        return ResponseEntity.ok(activityService.createActivity(activity));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updatePost(@RequestBody Activity activity) {
        return ResponseEntity.ok(activityService.updateActivity(activity));
    }

    @DeleteMapping("/delete")
    ResponseEntity<StatusResponse> deletePost(@RequestParam int id) {
        return ResponseEntity.ok(activityService.deleteActivity(id));
    }
}
