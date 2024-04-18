package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.auth.AuthenticationRequest;
import com.PBL5.VolunteerConnection.auth.AuthenticationResponse;
import com.PBL5.VolunteerConnection.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/demo")
@PreAuthorize("hasAnyAuthority('2')")
public class TestRoleController {
    @GetMapping("/test")
    public ResponseEntity<String> loginAccount(){
        return ResponseEntity.ok("123       OKE");
    }

}
