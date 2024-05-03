package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.response.LoginResponse;
import com.PBL5.VolunteerConnection.response.RegisterRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.response.UpdateAccountRequest;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestBody;

public interface AccountService {
    StatusResponse createAccount(RegisterRequest account);
    StatusResponse updateAccount(UpdateAccountRequest request);
    StatusResponse deleteAccount(String token);
    LoginResponse getInfoAccount(String token);
}
