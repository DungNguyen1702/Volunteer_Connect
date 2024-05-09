package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.request.AccountRequest;
import com.PBL5.VolunteerConnection.response.*;

public interface AccountService {
    StatusResponse createAccount(AccountRequest account);
    StatusResponse updateAccount(String token, AccountRequest request);
    StatusResponse deleteAccount(String token);
    AccountResponse getInfoAccount(String token);
    StatusResponse changePassword(String token, String oldPassword, String newPassword);

}
