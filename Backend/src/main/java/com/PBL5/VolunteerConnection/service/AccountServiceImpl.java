package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.dto.CandidateContactDTO;
import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.repository.CandidateRepository;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.request.AccountRequest;
import com.PBL5.VolunteerConnection.response.*;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.repository.AccountRepository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class AccountServiceImpl implements AccountService {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private UserRespository userRespository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private CandidateRepository candidateRepository;

    public StatusResponse createAccount(AccountRequest registerRequest) {
        Account account = new Account(registerRequest.getAccount(),
                passwordEncoder.encode(registerRequest.getPassword()),
                registerRequest.getName(),
                registerRequest.getRole());
        // account.setUser(new User());
        if (accountRepository.findByAccount(registerRequest.getAccount()) == null) {
            try {
                if (account.getRole() == 1) {
                    accountRepository.save(account);
                    Account creAccount = accountRepository.findByAccount(account.getAccount());
                    int account_id = creAccount.getId();
                    User user = new User(account_id, registerRequest.getTel(), registerRequest.getAddress(),
                            registerRequest.getGender(), registerRequest.getBirthday());
                    user.setAccount(creAccount);
                    userRespository.save(user);
                    creAccount.setUser(user);
                    accountRepository.save(creAccount);
                } else {
                    account.setIsValid(false);
                    accountRepository.save(account);
                }
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("Account " + account.getAccount() + "has been created sucessfully!!"))
                        .build();
            } catch (Exception e) {
                return StatusResponse.builder()
                        .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                                .body("Exception from server!! " + e))
                        .build();
            }

        } else {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.CONFLICT)
                            .body("Account " + account.getAccount() + "has been already created"))
                    .build();
        }
    }

    @Override
    public StatusResponse updateAccount(String token, AccountRequest request) {
        // int id = jwtService.getId(token);
        String username = jwtService.getUsername(token);
        String role = jwtService.getRole(token)[0];
        try {
            Account account = accountRepository.findByAccount(username);
            account.setName(request.getName());
            account.setAvatar(request.getAvatar());
            account.setUpdatedAt(Date.valueOf(LocalDate.now()));
            accountRepository.save(account);
            if (role.equals("1")) {
                User user = userRespository.findByAccountId(account.getId());
                user.setTel(request.getTel());
                user.setGender(request.getGender());
                user.setAddress(request.getAddress());
                user.setBirthday(request.getBirthday());
                userRespository.save(user);
            }

        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.CONFLICT).body("Updated Fail"))
                    .build();
        }
        return StatusResponse.builder()
                .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                        .body("Account " + username + "has been updated sucessfully!!"))
                .build();
    }

    @Override
    public StatusResponse deleteAccount(String token) {
        String username = jwtService.getUsername(token);
        try {
            Account account = accountRepository.findByAccount(username);
            account.setIsDeleted(true);
            account.setIsValid(false);
            accountRepository.save(account);

        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Delete Fail"))
                    .build();
        }
        return StatusResponse.builder()
                .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                        .body("Account " + username + "has been deleted sucessfully!!"))
                .build();

    }

    @Override
    public AccountResponse getInfoAccount(String token) {
        int accountId = jwtService.getId(token);
        Account account = accountRepository.findById(accountId);
        User user = userRespository.findByAccountId(account.getId());
        String updatedAt = null;
        String birthday = null;
        if (account.getUser() != null) {
            account.setUser(user);
            if (user.getBirthday() != null) {
                birthday = user.getBirthday().toString();
            }
        }
        if (account.getUpdatedAt() != null) {
            updatedAt = account.getUpdatedAt().toString();
        }
        return AccountResponse.builder()
                .id(account.getId())
                .account(account.getAccount())
                .name(account.getName())
                .role(account.getRole())
                .avatar(account.getAvatar())
                .status(account.getStatus())
                .createdAt(account.getCreatedAt().toString())
                .updatedAt(updatedAt)
                .userId(user.getId())
                .birthday(birthday)
                .tel(user.getTel())
                .address(user.getAddress())
                .gender(user.getGender())
                .build();
    }

    @Override
    public StatusResponse changePassword(String token, String oldPassword, String newPassword) {
        Account account = accountRepository.findById(jwtService.getId(token));
        if (passwordEncoder.matches(oldPassword, account.getPassword())) {
            account.setPassword(passwordEncoder.encode(newPassword));
            accountRepository.save(account);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Password has been changed sucessfully!!"))
                    .build();
        }
        return StatusResponse.builder()
                .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body("Password wasn't correctly!!"))
                .build();
    }

    @Override
    public List<AccountResponse> getAllCandidate() {
        List<Account> accountList = accountRepository.findAllByRole(1);
        List<User> userList = userRespository.findAll();
        System.out.print(accountList.size());

        for (int i = 0; i < accountList.size(); i++) {
            if (accountList.get(i).getUser() == null) {
                System.out.println("NULL LA: " + accountList.get(i).getId());
                accountList.get(i).setUser(userList.get(i));
            } else {
                System.out.println("KHONG NULL LA: " + accountList.get(i).getId());
            }
        }
        List<AccountResponse> accountResponses = new ArrayList<>();
        for (Account account : accountList) {
            String updatedAt = null;
            String birthday = null;
            User user = account.getUser();
            // System.out.print(user);
            if (account.getUpdatedAt() != null) {
                updatedAt = account.getUpdatedAt().toString();
            }
            if (user.getBirthday() != null) {
                birthday = user.getBirthday().toString();
            }
            accountResponses.add(AccountResponse.builder()
                    .id(account.getId())
                    .account(account.getAccount())
                    .name(account.getName())
                    .role(account.getRole())
                    .avatar(account.getAvatar())
                    .status(account.getStatus())
                    .createdAt(account.getCreatedAt().toString())
                    .updatedAt(updatedAt)
                    .userId(user.getId())
                    .birthday(birthday)
                    .tel(user.getTel())
                    .address(user.getAddress())
                    .gender(user.getGender())
                    .activityNumber(user.getCandidates().size())
                    .build());
        }
        return accountResponses;
    }

    @Override
    public ContactResponse getContact(int id, int role) {
        if (role == 1) {
            List<CandidateContactDTO> candidateContactDTOs = candidateRepository.findByAccountId(id);
            Account account = candidateContactDTOs.get(0).getAccount();
            User user = candidateContactDTOs.get(0).getUser();
            List<Activity> activityList = new ArrayList<>();
            int earnedCertificateNumber = 0;
            for (CandidateContactDTO candidate : candidateContactDTOs) {
                if (candidate.getCertificate() != null) {
                    earnedCertificateNumber++;
                }

                if (candidate.getActivity() != null) {
                    activityList.add(candidate.getActivity());

                }
            }

            return new ContactResponse(account, user, activityList, earnedCertificateNumber);
        } else {
            Account account = accountRepository.findById(id);
            List<Activity> activities = account.getActivities();
            return new ContactResponse(account, activities);
        }
    }

    @Override
    public List<OrganizationResponse> getAllOrganization() {
        List<OrganizationResponse> organizationResponses = new ArrayList<>();
        List<Account> accountList = accountRepository.findAllByRole(2);
        System.out.print(accountList.get(0).getId());
        for (Account account : accountList) {
            organizationResponses.add(new OrganizationResponse(account, account.getActivities()));
        }
        return organizationResponses;
    }

}
