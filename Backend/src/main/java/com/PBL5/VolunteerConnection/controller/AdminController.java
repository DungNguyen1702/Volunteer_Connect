package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.DeleteActivityForm;
import com.PBL5.VolunteerConnection.request.AccountRequest;
import com.PBL5.VolunteerConnection.request.ActivityRequest;
import com.PBL5.VolunteerConnection.request.DeleteActivityRequest;
import com.PBL5.VolunteerConnection.response.ActivityDetailResponse;
import com.PBL5.VolunteerConnection.response.DeleteFormResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.AccountService;
import com.PBL5.VolunteerConnection.service.ActivityService;
import com.PBL5.VolunteerConnection.service.DeleteActivityFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/admin")
public class AdminController {
    @Autowired
    private ActivityService activityService;
    @Autowired
    private AccountService accountService;
    @Autowired
    private DeleteActivityFormService deleteActivityFormService;

    @GetMapping("/getAllActivity")
    ResponseEntity<List<ActivityDetailResponse>> selectAllActivityByAdmin() {
        return ResponseEntity.ok(activityService.getAllByAdmin());
    }

    @PostMapping("/deleteActivity")
    ResponseEntity<StatusResponse> deletePost(@RequestHeader("Authorization") String token,
            @RequestBody ActivityRequest activityRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(activityService.deleteActivity(token, activityRequest));
    }

    @GetMapping("/getAllAccount")
    ResponseEntity<List<Account>> selecteAllAccount() {
        return ResponseEntity.ok(accountService.getAllByAdmin());
    }

    @PostMapping("/updateDeleteForm")
    ResponseEntity<StatusResponse> updateDeleteForm(@RequestHeader("Authorization") String token,
            @RequestBody DeleteActivityRequest deleteActivityRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(deleteActivityFormService.updateDeleteActivityForm(token, deleteActivityRequest));
    }

    @GetMapping("/selectAllDeleteForm")
    ResponseEntity<List<DeleteFormResponse>> selectAll() {
        return ResponseEntity.ok(deleteActivityFormService.selectAll());
    }

    @GetMapping("/selectAllAprove")
    ResponseEntity<List<DeleteActivityForm>> selectAllAprove() {
        return ResponseEntity.ok(deleteActivityFormService.selectAllAprove());
    }

    @PostMapping("/deleteAccount")
    ResponseEntity<StatusResponse> deleteAccount(@RequestHeader("Authorization") String token,
            @RequestBody AccountRequest request) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(accountService.deleteAccountByAdnmin(token, request));
    }

    @PostMapping("/backupAccount")
    ResponseEntity<StatusResponse> backupAccount(@RequestParam("id") int id) {
        return ResponseEntity.ok(accountService.backUpAccount(id));
    }

    @PostMapping("/updateAccount")
    ResponseEntity<StatusResponse> backupAccount(@RequestBody AccountRequest accountRequest) {
        return ResponseEntity.ok(accountService.updateAccountByAdmin(accountRequest));
    }
}
