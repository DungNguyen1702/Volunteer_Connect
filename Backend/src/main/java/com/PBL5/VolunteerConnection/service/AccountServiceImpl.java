package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.response.RegisterRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.repository.AccountRepository;

import java.sql.Date;
import java.time.LocalDate;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements  AccountService{
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private UserRespository userRespository;
    public StatusResponse createAccount(RegisterRequest registerRequest){
        Account account = new Account(registerRequest.getAccount(),
                            passwordEncoder.encode(registerRequest.getPassword()),
                            registerRequest.getName(),
                            registerRequest.getRole());
        if (accountRepository.findByAccount(registerRequest.getAccount()) == null){
            try{
                accountRepository.save(account);
                int account_id = accountRepository.findByAccount(account.getAccount()).getId();
                if(account.getRole() == 1){
                    userRespository.save(new User(account_id,
                            registerRequest.getTel(),
                            registerRequest.getAddress(),
                            registerRequest.getGender(),
                            Date.valueOf(LocalDate.now())));
                }


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


