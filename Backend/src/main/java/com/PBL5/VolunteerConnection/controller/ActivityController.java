package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.response.ActivityRequest;
import com.PBL5.VolunteerConnection.response.AllActivityResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    @PostMapping("/getAllActivity")
    ResponseEntity<AllActivityResponse> getAllActivity (@RequestBody ActivityRequest token){
        return ResponseEntity.ok(activityService.getAllActivity(token));
    }
}
