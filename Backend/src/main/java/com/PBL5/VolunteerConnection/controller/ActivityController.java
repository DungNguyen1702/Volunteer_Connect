package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.response.ActivityDetailResponse;
import com.PBL5.VolunteerConnection.response.ActivityRequest;
import com.PBL5.VolunteerConnection.response.ActivityResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.ActivityService;

import java.util.List;

@RestController
@RequestMapping("api/v1/activity")
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createActivity(@RequestHeader("Authorization") String token , @RequestBody ActivityRequest activityRequest) {
        return ResponseEntity.ok(activityService.createActivity(token, activityRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updatePost(@RequestHeader("Authorization") String token ,@RequestBody ActivityRequest activityRequest) {
        return ResponseEntity.ok(activityService.updateActivity(token, activityRequest));
    }

    @DeleteMapping("/delete")
    ResponseEntity<StatusResponse> deletePost(@RequestHeader("Authorization") String token ,@RequestBody ActivityRequest activityRequest) {
        return ResponseEntity.ok(activityService.deleteActivity(token ,activityRequest));
    }
    @GetMapping("/getAllActivity")
    ResponseEntity<List<ActivityResponse>> getAllActivity (@RequestHeader("Authorization") String token){
        return ResponseEntity.ok(activityService.getAllActivity(token));
    }
    @GetMapping("/getActivityDetail")
    ResponseEntity<ActivityDetailResponse> getActivityDetail(@RequestHeader("Authorization") String token ,@RequestBody ActivityRequest activityRequest){
        return ResponseEntity.ok(activityService.getActivityDetail(token, activityRequest));
    }
}
