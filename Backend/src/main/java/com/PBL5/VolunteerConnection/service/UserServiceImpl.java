package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.repository.AccountRepository;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.response.CreateUserRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements  UserService{
    @Autowired
    private UserRespository userRespository;
    @Autowired
    private AccountRepository accountRepository;
    private String SECRECT_KEY = "testing";
    @Override
    public StatusResponse createUser(CreateUserRequest createUserRequest) {
            try{
                String token = createUserRequest.getToken();
                Algorithm algorithm = Algorithm.HMAC256(SECRECT_KEY.getBytes());
                JWTVerifier jwtVerifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = jwtVerifier.verify(token);
                String account = decodedJWT.getSubject();
                Account authAccount = accountRepository.findByAccount(account);
                userRespository.save(new User(authAccount.getId(), createUserRequest.getTel(), createUserRequest.getAddress(), createUserRequest.getGender(), createUserRequest.getBirthday()));
                return  StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED).body("User has been created sucessfully!!"))
                        .build();
            }catch(Exception e){
                return StatusResponse.builder()
                        .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e ))
                        .build();
            }

        }
}
