package com.PBL5.VolunteerConnection.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
    public ResponseEntity<String> registerAccount(@RequestBody Account account){
        ResponseEntity<String> responseEntity = null;
        try {
            Account saveAccount = accountService.createAccount(account);
            if (saveAccount.getId() > 0){
                responseEntity = ResponseEntity.status(HttpStatus.CREATED).body("Account " + saveAccount.getAccount()+"has been created");
            }
        } catch (Exception e) {
            responseEntity = ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!!" + e);
        }
        return responseEntity;
        
    }
}
