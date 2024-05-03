package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.response.*;

public interface AccountService {
    StatusResponse createAccount(AccountRequest account);
    StatusResponse updateAccount(String token, AccountRequest request);
    StatusResponse deleteAccount(String token);
    AccountDetailResponse getInfoAccount(String token);
    UserDetailResponse getInfoUser(String token);
}
