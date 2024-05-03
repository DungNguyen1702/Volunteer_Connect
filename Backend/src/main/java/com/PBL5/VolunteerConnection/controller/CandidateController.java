package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.response.ActivityRequest;
import com.PBL5.VolunteerConnection.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
    ResponseEntity<StatusResponse> createCandidate(@RequestBody CandidateRequest CandidateRequest) {
        return ResponseEntity.ok(candidateService.createCandidate(CandidateRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updateCandidate(@RequestBody CandidateRequest CandidateRequest) {
        return ResponseEntity.ok(candidateService.updateCandidate(CandidateRequest));
    }

    @DeleteMapping("/delete")
    ResponseEntity<StatusResponse> deleteCandidate(@RequestBody CandidateRequest CandidateRequest) {
        return ResponseEntity.ok(candidateService.deleteCandidate(CandidateRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<Candidate>> selectAllCandidate(@RequestBody CandidateRequest CandidateRequest) {
        return ResponseEntity.ok(candidateService.selectAllCandidate(CandidateRequest));
    }
    @PostMapping("/selectAllActivity")
    ResponseEntity<List<Activity>> selectAllActivity(@RequestBody CandidateRequest candidateRequest){
        return ResponseEntity.ok(activityService.selectAllActivitiesByCandidate(candidateRequest));
    }
}
