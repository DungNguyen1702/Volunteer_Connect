package com.PBL5.VolunteerConnection.controller;

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
    public ResponseEntity<StatusResponse> updateAccount(@RequestBody UpdateAccountRequest updateRequest){
        return ResponseEntity.ok(accountService.updateAccount(updateRequest));
    }
    @PostMapping("/delete")
    public ResponseEntity<StatusResponse> deleteAccount(@RequestParam String token){
//        String token = request.getAttribute("token").toString();
        return ResponseEntity.ok(accountService.deleteAccount(token));
    }

}
