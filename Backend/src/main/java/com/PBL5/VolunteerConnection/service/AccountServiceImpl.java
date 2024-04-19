package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.response.StatusResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.repository.AccountRepository;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements  AccountService{
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    private AccountRepository accountRepository;
    public StatusResponse createAccount(Account account){
        if (accountRepository.findByAccount(account.getAccount()) == null){
            try{
                account.setPassword(passwordEncoder.encode(account.getPassword()));
                accountRepository.save(account);
                return  StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED).body("Account " + account.getAccount()+"has been created sucessfully!!"))
                        .build();
            }catch(Exception e){
                return StatusResponse.builder()
                        .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e ))
                        .build();
            }

        }
        else{
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.CONFLICT).body("Account " + account.getAccount()+"has been already created"))
                    .build();
        }
    }


}


