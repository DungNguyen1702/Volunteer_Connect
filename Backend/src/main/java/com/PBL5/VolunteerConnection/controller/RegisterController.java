package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.response.StatusResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.service.AccountServiceImpl;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/api/v1/auth")
public class RegisterController {
    @Autowired
    private AccountServiceImpl accountService;
    @PostMapping("/register")
    public ResponseEntity<StatusResponse> registerAccount(@RequestBody Account account){
        return ResponseEntity.ok(accountService.createAccount(account));
    }
}