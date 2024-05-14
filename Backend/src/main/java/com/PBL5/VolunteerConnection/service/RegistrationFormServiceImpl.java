package com.PBL5.VolunteerConnection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.RegistrationForm;
import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.CandidateRepository;
import com.PBL5.VolunteerConnection.repository.RegistrationFormRepository;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.request.RegistrationFormRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class RegistrationFormServiceImpl implements RegistrationFormService {
    @Autowired
    private RegistrationFormRepository registrationFormRepository;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRespository userRespository;
    @Autowired
    private CandidateRepository candidateRepository;

    @Override
    public StatusResponse createRegistrationForm(String token, RegistrationFormRequest registrationForm) {
        // TODO Auto-generated method stub
        try {
            int account_id = jwtService.getId(token);
            User user = userRespository.findByAccountId(account_id);
            int user_id = user.getId();
            List<RegistrationForm> registrationForms = user.getRegistrationForms();
            boolean check = true;
            for (RegistrationForm registrationForm2 : registrationForms) {
                if (registrationForm.getActivityId() == registrationForm2.getActivityId()) {
                    check = false;
                }
            }
            if (check == true) {
                RegistrationForm createdForm = new RegistrationForm(user_id, registrationForm.getActivityId());
                registrationFormRepository.save(createdForm);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("RegistrationForm " + createdForm.getId() + "has been created sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("RegistrationForm cant not be created because you are candidate of this activity"))
                        .build();
            }
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
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
        int organizationId = activityRepository.findById(activityId).getOrganizationId();
        int account_id = jwtService.getId(token);
        try {
            if (account_id == organizationId) {
                return registrationFormRepository.findByActivityIdAndIsConfirmed(activityId, 0);
            } else {
                System.out.println("You not owner");
                return null;
            }
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public Candidate updateRegistrationForm(String token, RegistrationFormRequest registrationForm) {
        // TODO Auto-generated method stub

        try {
            int organizationId = activityRepository.findById(registrationForm.getActivityId()).getOrganizationId();
            int account_id = jwtService.getId(token);
            System.out.println(organizationId);
            if (account_id == organizationId) {
                RegistrationForm createdForm = registrationFormRepository.findById(registrationForm.getId());
                createdForm.setIsConfirmed(registrationForm.getIsConfirmed());
                registrationFormRepository.save(createdForm);
                Candidate createdCandidate = new Candidate(createdForm.getUserId(), registrationForm.getActivityId(),
                        "", null);
                // candidateRepository.save(createdCandidate);
                User findUser = userRespository.findById(createdForm.getUserId());
                findUser.getCandidates().add(createdCandidate);
                createdCandidate.setUser(findUser);
                // System.out.println(findUser);
                createdCandidate.setUserId(findUser.getId());
                candidateRepository.save(createdCandidate);
                userRespository.save(findUser);
                return createdCandidate;
            } else {
                System.out.println("you are not owner");
                return null;
            }
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println(e.getMessage());
            return null;
        }
    }

}
