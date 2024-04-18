package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.auth.AuthenticationRequest;
import com.PBL5.VolunteerConnection.auth.AuthenticationResponse;
import com.PBL5.VolunteerConnection.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/demo")
@RequiredArgsConstructor
public class TestRoleController {
    @Autowired
    private LoginService loginService;
    @GetMapping("/test")
    public ResponseEntity<String> loginAccount(){
        return ResponseEntity.ok("123       OKE");
    }

}
