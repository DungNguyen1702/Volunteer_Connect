package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.request.LoginRequest;
import com.PBL5.VolunteerConnection.response.LoginResponse;
import com.PBL5.VolunteerConnection.request.AccountRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.AccountService;
import com.PBL5.VolunteerConnection.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;



@RestController
@RequestMapping("/api/v1/auth")
public class AuthenticationController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private LoginService loginService;
    @PostMapping("/register")
    public ResponseEntity<StatusResponse> registerAccount(@RequestBody AccountRequest registerRequest){
        return ResponseEntity.ok(accountService.createAccount(registerRequest));
    }
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> loginAccount(@RequestBody LoginRequest authenticationRequest){
        return ResponseEntity.ok(loginService.authenticate(authenticationRequest));
    }
}