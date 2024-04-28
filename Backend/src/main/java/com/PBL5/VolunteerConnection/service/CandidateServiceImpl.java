package com.PBL5.VolunteerConnection.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Candidate;

import com.PBL5.VolunteerConnection.repository.activity.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.CandidateRepository;
import com.PBL5.VolunteerConnection.response.CandidateRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class CandidateServiceImpl implements CandidateService {
    @Autowired
    private CandidateRepository candidateRepository;
    @Autowired
    private ActivityService activityService;
    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public StatusResponse createCandidate(CandidateRequest candidate) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(candidate.getActivityId()).getOrganizationId();
            if (activityService.hasActivity(candidate.getToken(), organizationId)) {
                Candidate createCandidate = new Candidate(candidate.getUserId(),
                        candidate.getActivityId(),
                        candidate.getCertificate(), candidate.getDateCertificate());
                candidateRepository.save(createCandidate);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("Candidate " + createCandidate.getUserId() + "has been created sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Candidate cant not be created because you are not owner!!"))
                        .build();
            }

        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse updateCandidate(CandidateRequest candidate) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(candidate.getActivityId()).getOrganizationId();
            if (activityService.hasActivity(candidate.getToken(), organizationId)) {
                Candidate updateCandidate = candidateRepository.findById(candidate.getId());
                updateCandidate.setActivityId(candidate.getActivityId());
                updateCandidate.setCertificate(candidate.getCertificate());
                updateCandidate.setDateCertificate(candidate.getDateCertificate());
                updateCandidate.setUserId(candidate.getUserId());
                candidateRepository.save(updateCandidate);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Candidate " + updateCandidate.getUserId() + "has been updated sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Candidate cant not be updated because you are not owner!!"))
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
    public StatusResponse deleteCandidate(CandidateRequest candidate) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(candidate.getActivityId()).getOrganizationId();
            if (activityService.hasActivity(candidate.getToken(), organizationId)) {
                candidateRepository.deleteById(candidate.getId());
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Candidate has been deleted sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Candidate cant not be deleted because you are not owner!!"))
                        .build();
            }

        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public List<Candidate> selectAllCandidate(CandidateRequest candidate) {
        // TODO Auto-generated method stub
        List<Candidate> candidatelList = new ArrayList<>();
        try {
            int organizationId = activityRepository.findById(candidate.getActivityId()).getOrganizationId();
            if (activityService.hasActivity(candidate.getToken(), organizationId)) {
                candidatelList = candidateRepository.findByActivityId(candidate.getActivityId());
            }
            return candidatelList;

        } catch (Exception e) {
            // TODO: handle exception
            return candidatelList;
        }

    }



}
