package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.response.LoginResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.response.UpdateAccountRequest;
import com.PBL5.VolunteerConnection.service.AccountService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/account")
@RequiredArgsConstructor
public class AccountController {
    @Autowired
    AccountService accountService;
    @PostMapping("/update")
    public ResponseEntity<StatusResponse> updateAccount(@RequestHeader("Authorization") String token,  @RequestBody UpdateAccountRequest updateRequest){
        return ResponseEntity.ok(accountService.updateAccount(updateRequest));
    }
    @DeleteMapping("/delete")
    public ResponseEntity<StatusResponse> deleteAccount(@RequestHeader("Authorization") String token){
        return ResponseEntity.ok(accountService.deleteAccount(token));
    }
    @GetMapping("/detail")
    public ResponseEntity<LoginResponse> getInfoAccount(@RequestHeader("Authorization") String token){
        return ResponseEntity.ok(accountService.getInfoAccount(token));
    }

}
