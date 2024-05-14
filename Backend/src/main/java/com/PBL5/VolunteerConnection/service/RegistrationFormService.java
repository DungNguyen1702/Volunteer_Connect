package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.RegistrationForm;
import com.PBL5.VolunteerConnection.request.RegistrationFormRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

/**
 * RegistrationFormService
 */
public interface RegistrationFormService {
    StatusResponse createRegistrationForm(String token, RegistrationFormRequest registrationForm);

    Candidate updateRegistrationForm(String token, RegistrationFormRequest registrationForm);

    StatusResponse deleteRegistrationForm(String token, RegistrationFormRequest registrationForm);

    List<RegistrationForm> selectAll();

    List<RegistrationForm> selectAllByActivityId(String token, int activityId);

}