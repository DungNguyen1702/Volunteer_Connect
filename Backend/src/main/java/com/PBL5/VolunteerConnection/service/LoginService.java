package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.request.LoginRequest;
import com.PBL5.VolunteerConnection.response.LoginResponse;
import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.repository.AccountRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
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
    public LoginResponse authenticate(LoginRequest loginRequest) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getAccount(), loginRequest.getPassword()));
        Account account = accountRepository.findByAccount(loginRequest.getAccount());
        if (account.getIsDeleted()){
            return LoginResponse.builder()
                    .isDeleted(true).
                    build();
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(String.valueOf(account.getRole())));
        var jwtToken = jwtService.generateToken(account, authorities);
        var jwtRefreshToken = jwtService.generateRefreshToken(account, authorities);
        return LoginResponse.builder()
                .token(jwtToken)
                .refreshToken(jwtRefreshToken)
                .id(account.getId())
                .account(account.getAccount())
                .name(account.getName())
                .avatar(account.getAvatar())
                .status(account.getStatus())
                .createdAt(account.getCreatedAt())
                .updatedAt(account.getUpdatedAt())
                .build();

    }

}
