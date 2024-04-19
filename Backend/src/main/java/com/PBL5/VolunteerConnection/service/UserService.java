package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.response.CreateUserRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface UserService {
    StatusResponse createUser(CreateUserRequest createUserRequest);
}
