package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.response.AccountResponse;
import com.PBL5.VolunteerConnection.request.AccountRequest;
import com.PBL5.VolunteerConnection.response.CandidateDetailResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.AccountService;
import com.PBL5.VolunteerConnection.service.CandidateService;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/account")
@RequiredArgsConstructor
public class AccountController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private CandidateService candidateService;
    @PostMapping("/update")
    public ResponseEntity<StatusResponse> updateAccount(@RequestHeader("Authorization") String token,
            @RequestBody AccountRequest updateRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(accountService.updateAccount(token, updateRequest));
    }

    @DeleteMapping("/delete")
    public ResponseEntity<StatusResponse> deleteAccount(@RequestHeader("Authorization") String token) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(accountService.deleteAccount(token));
    }

    @GetMapping("/detail")
    public ResponseEntity<AccountResponse> getInfoAccount(@RequestHeader("Authorization") String token) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(accountService.getInfoAccount(token));
    }
    @PostMapping("/changePassword")
    public ResponseEntity<StatusResponse> changePassword(@RequestHeader("Authorization") String token, @RequestBody AccountRequest updateRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(accountService.changePassword(token, updateRequest.getPassword(), updateRequest.getNewPassword()));
    }
    @GetMapping("/selectAllCertificate")
    ResponseEntity<List<CandidateDetailResponse>> selectAllCandidateHasCertificate(@RequestHeader("Authorization") String token) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(candidateService.getAllCertificateByAccountId(token));
    }
}
