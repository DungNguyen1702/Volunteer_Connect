package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.request.ActivityRequest;
import com.PBL5.VolunteerConnection.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.PBL5.VolunteerConnection.service.ActivityService;

import java.util.List;

@RestController
@RequestMapping("api/v1/activity")
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    @PostMapping("/organization/create")
    ResponseEntity<ActivityResponse> createActivity(@RequestHeader("Authorization") String token,
            @RequestBody ActivityRequest activityRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(activityService.createActivity(token, activityRequest));
    }

    @PostMapping("/organization/update")
    ResponseEntity<StatusResponse> updatePost(@RequestHeader("Authorization") String token,
            @RequestBody ActivityRequest activityRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(activityService.updateActivity(token, activityRequest));
    }

    @GetMapping("/organization/getAllActivity")
    ResponseEntity<List<ActivityResponse>> getAllActivity(@RequestHeader("Authorization") String token) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(activityService.getAllActivity(token));
    }

    @GetMapping("/getActivityDetail")
    ResponseEntity<ActivityDetailResponse> getActivityDetail(@RequestHeader("Authorization") String token,
            @RequestParam("activityId") int id) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(activityService.getActivityDetail(token, id));
    }

    @GetMapping("/candidate/selectAllActivity")
    ResponseEntity<List<ActivityResponse>> selectAllActivity(@RequestHeader("Authorization") String token) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(activityService.getAllActivityByCandidate(token));
    }

}
