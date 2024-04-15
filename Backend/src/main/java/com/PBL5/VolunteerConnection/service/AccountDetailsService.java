package com.PBL5.VolunteerConnection.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.repository.AccountRepository;

@Service
public class AccountDetailsService implements UserDetailsService {

    @Autowired
    private AccountRepository accountRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<Account> accounts = accountRepository.findByAccount(username);
        if (accounts.isEmpty()) {
            throw new UsernameNotFoundException("Username: " + username + "was not found!!");
        }
        String password = null;
        List<GrantedAuthority> authorities = null;
        username = accounts.get(0).getAccount();
        password = accounts.get(0).getPassword();
        authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(accounts.get(0).getRole()));
        return new User(username, password, authorities);
    }

}