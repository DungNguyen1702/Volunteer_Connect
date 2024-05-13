package com.PBL5.VolunteerConnection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.RegistrationForm;
import com.PBL5.VolunteerConnection.repository.RegistrationFormRepository;
import com.PBL5.VolunteerConnection.request.RegistrationFormRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class RegistrationFormServiceImpl implements RegistrationFormService {
    @Autowired
    private RegistrationFormRepository registrationFormRepository;

    @Override
    public StatusResponse createRegistrationForm(String token, RegistrationFormRequest registrationForm) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public StatusResponse deleteRegistrationForm(String token, RegistrationFormRequest registrationForm) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<RegistrationForm> selectAll() {
        // TODO Auto-generated method stub
        try {
            List<RegistrationForm> registrationForms = registrationFormRepository.findAll();
            return registrationForms;
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<RegistrationForm> selectAllByActivityId(String token, int activityId) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public StatusResponse updateRegistrationForm(String token, RegistrationFormRequest registrationForm) {
        // TODO Auto-generated method stub
        return null;
    }

}
