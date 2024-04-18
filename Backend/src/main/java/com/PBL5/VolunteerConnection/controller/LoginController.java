package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.auth.AuthenticationRequest;
import com.PBL5.VolunteerConnection.auth.AuthenticationResponse;
import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.service.AccountServiceImpl;
import com.PBL5.VolunteerConnection.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class LoginController {
    @Autowired
    private LoginService loginService;
    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> loginAccount(@RequestBody AuthenticationRequest authenticationRequest){
        return ResponseEntity.ok(loginService.authenticate(authenticationRequest));
    }

}
