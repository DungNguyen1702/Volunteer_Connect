package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.request.AccountRequest;
import com.PBL5.VolunteerConnection.response.*;

import java.util.List;

public interface AccountService {
    StatusResponse createAccount(AccountRequest account);

    StatusResponse updateAccount(String token, AccountRequest request);

    StatusResponse deleteAccount(String token);

    AccountResponse getInfoAccount(String token);

    StatusResponse changePassword(String token, String oldPassword, String newPassword);

    List<AccountResponse> getAllCandidate();

    ContactResponse getContact(int id, int role);

    List<OrganizationResponse> getAllOrganization();

    List<Account> getAllByAdmin();
    StatusResponse backUpAccount(int id);
    StatusResponse deleteAccountByAdnmin(int id);
    StatusResponse updateAccountByAdmin(AccountRequest accountRequest);
}
