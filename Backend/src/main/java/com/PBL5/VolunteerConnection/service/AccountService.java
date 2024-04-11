package com.PBL5.VolunteerConnection.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.repository.AccountRepository;

@Service
public class AccountService {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    private AccountRepository accountRepository;
    public Account createAccount(Account account){
        account.setPassword(passwordEncoder.encode(account.getPassword()));
        return accountRepository.save(account);
    }
}
