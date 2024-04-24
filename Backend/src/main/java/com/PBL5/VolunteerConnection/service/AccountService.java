package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.response.RegisterRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface AccountService {
    StatusResponse createAccount(RegisterRequest account);
}
