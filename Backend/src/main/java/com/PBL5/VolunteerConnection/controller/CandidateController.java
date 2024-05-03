package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.response.ActivityRequest;
import com.PBL5.VolunteerConnection.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.PBL5.VolunteerConnection.response.CandidateRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.CandidateService;

import java.util.List;

@RestController
@RequestMapping("api/v1/candidate")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;
    @Autowired
    private ActivityService activityService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createCandidate(@RequestHeader("Authorization") String token , @RequestBody CandidateRequest CandidateRequest) {
        return ResponseEntity.ok(candidateService.createCandidate(token, CandidateRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updateCandidate(@RequestHeader("Authorization") String token ,@RequestBody CandidateRequest CandidateRequest) {
        return ResponseEntity.ok(candidateService.updateCandidate(token, CandidateRequest));
    }

    @DeleteMapping("/delete")
    ResponseEntity<StatusResponse> deleteCandidate(@RequestHeader("Authorization") String token ,@RequestBody CandidateRequest CandidateRequest) {
        return ResponseEntity.ok(candidateService.deleteCandidate(token, CandidateRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<Candidate>> selectAllCandidate(@RequestHeader("Authorization") String token,@RequestBody CandidateRequest CandidateRequest) {
        return ResponseEntity.ok(candidateService.selectAllCandidate(token, CandidateRequest));
    }
    @GetMapping("/selectAllActivity")
    ResponseEntity<List<Activity>> selectAllActivity(@RequestHeader("Authorization") String token ,@RequestBody CandidateRequest candidateRequest){
        return ResponseEntity.ok(activityService.selectAllActivitiesByCandidate(token,candidateRequest));
    }
}
