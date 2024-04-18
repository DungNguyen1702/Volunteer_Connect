package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.auth.AuthenticationRequest;
import com.PBL5.VolunteerConnection.auth.AuthenticationResponse;
import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;

@Service
@RequiredArgsConstructor
public class LoginService {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtService jwtService;
    public AuthenticationResponse authenticate(AuthenticationRequest authenticationRequest){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authenticationRequest.getAccount(), authenticationRequest.getPassword()));
        Account account = accountRepository.findByAccount(authenticationRequest.getAccount()).orElseThrow();
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(String.valueOf(account.getRole())));
        var jwtToken = jwtService.generateToken(account, authorities);
        var jwtRefreshToken = jwtService.generateRefreshToken(account, authorities);
        return AuthenticationResponse.builder()
                .token(jwtToken)
                .refreshToken(jwtRefreshToken)
                .build();

    }

}
