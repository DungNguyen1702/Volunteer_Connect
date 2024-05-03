package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.response.RegisterRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.response.UpdateAccountRequest;
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
    @Autowired
    private JwtService jwtService;
    public StatusResponse createAccount(RegisterRequest registerRequest){
        Account account = new Account(registerRequest.getAccount(),
                            passwordEncoder.encode(registerRequest.getPassword()),
                            registerRequest.getName(),
                            registerRequest.getRole());
        if (accountRepository.findByAccount(registerRequest.getAccount()) == null){
            try{
                if(account.getRole() == 1){
                    accountRepository.save(account);
                    int account_id = accountRepository.findByAccount(account.getAccount()).getId();
                    userRespository.save(new User(account_id,
                            registerRequest.getTel(),
                            registerRequest.getAddress(),
                            registerRequest.getGender(),
                            Date.valueOf(LocalDate.now()),
                            registerRequest.getEmail()));
                }
                else{
                    account.setIsValid(false);
                    accountRepository.save(account);
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

    @Override
    public StatusResponse updateAccount(UpdateAccountRequest request) {
        String token = request.getToken();
//        int id = jwtService.getId(token);
        String username = jwtService.getUsername(token);
        String role = jwtService.getRole(token)[0];
        try{
            Account account = accountRepository.findByAccount(username);
            account.setName(request.getName());
            account.setAvatar(request.getAvatar());
            account.setUpdatedAt(Date.valueOf(LocalDate.now()));
            accountRepository.save(account);
            if (role.equals("1")){
                User user = userRespository.findByAccountId(account.getId());
                user.setTel(request.getTel());
                user.setGender(request.getGender());
                user.setAddress(request.getAddress());
                user.setBirthday(request.getBirthday());
                userRespository.save(user);
            }

        }catch (Exception e){
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.CONFLICT).body("Updated Fail"))
                    .build();
        }
        return  StatusResponse.builder()
                .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Account " + username +"has been updated sucessfully!!"))
                .build();
    }

    @Override
    public StatusResponse deleteAccount(String token) {
        String username = jwtService.getUsername(token);
        try{
            Account account = accountRepository.findByAccount(username);
            account.setIsDeleted(true);
            account.setIsValid(false);
            accountRepository.save(account);

        }catch (Exception e){
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Delete Fail"))
                    .build();
        }
        return  StatusResponse.builder()
                .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Account " + username +"has been deleted sucessfully!!"))
                .build();


    }




}


