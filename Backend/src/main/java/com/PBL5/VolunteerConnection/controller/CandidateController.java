package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.model.Candidate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.PBL5.VolunteerConnection.request.CandidateRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.CandidateService;

import java.util.List;

@RestController
@RequestMapping("api/v1/candidate")
public class CandidateController {
    @Autowired
    private CandidateService candidateService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createCandidate(@RequestHeader("Authorization") String token , @RequestBody CandidateRequest CandidateRequest) {
        token = token.substring("Bearer ".length());

        return ResponseEntity.ok(candidateService.createCandidate(token, CandidateRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updateCandidate(@RequestHeader("Authorization") String token ,@RequestBody CandidateRequest CandidateRequest) {
        token = token.substring("Bearer ".length());

        return ResponseEntity.ok(candidateService.updateCandidate(token, CandidateRequest));
    }

    @DeleteMapping("/delete")
    ResponseEntity<StatusResponse> deleteCandidate(@RequestHeader("Authorization") String token ,@RequestBody CandidateRequest CandidateRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(candidateService.deleteCandidate(token, CandidateRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<Candidate>> selectAllCandidate(@RequestHeader("Authorization") String token,@RequestBody CandidateRequest CandidateRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(candidateService.selectAllCandidate(token, CandidateRequest));
    }

}
