package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.response.AccountResponse;
import com.PBL5.VolunteerConnection.response.PostsActivitiesResponse;
import com.PBL5.VolunteerConnection.service.AccountService;
import com.PBL5.VolunteerConnection.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/guest")
@RequiredArgsConstructor
public class GuestController {
    @Autowired
    private PostService postService;
    @Autowired
    private AccountService accountService;
    @GetMapping("/getAllCandidate")
    public ResponseEntity<List<AccountResponse>> getAllCandidate() {
        return ResponseEntity.ok(accountService.getAllCandidate());
    }

}
