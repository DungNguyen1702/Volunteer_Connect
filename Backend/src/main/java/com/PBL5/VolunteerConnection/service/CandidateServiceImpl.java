package com.PBL5.VolunteerConnection.service;

import java.util.ArrayList;
import java.util.List;

import com.PBL5.VolunteerConnection.dto.CandidateDetailDTO;
import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.response.CandidateDetailResponse;
import com.PBL5.VolunteerConnection.response.UserDetailResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Candidate;

import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.CandidateRepository;
import com.PBL5.VolunteerConnection.request.CandidateRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class CandidateServiceImpl implements CandidateService {
    @Autowired
    private CandidateRepository candidateRepository;
    @Autowired
    private AccountService accountService;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private JwtService jwtService;

    @Override
    public StatusResponse createCandidate(String token, CandidateRequest candidate) {
        // TODO Auto-generated method stub
        try {

            int organizationId = activityRepository.findById(candidate.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
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
    public StatusResponse updateCandidate(String token, CandidateRequest candidate) {
        // TODO Auto-generated method stub
        try {

            int organizationId = activityRepository.findById(candidate.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
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
    public StatusResponse deleteCandidate(String token, CandidateRequest candidate) {
        // TODO Auto-generated method stub
        try {
            token = token.substring("Bearer ".length());
            int organizationId = activityRepository.findById(candidate.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
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
    public List<Candidate> selectAllCandidate(String token, CandidateRequest candidate) {
        // TODO Auto-generated method stub

        List<Candidate> candidatelList = new ArrayList<>();
        try {

            int organizationId = activityRepository.findById(candidate.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
                candidatelList = candidateRepository.findByActivityId(candidate.getActivityId());
            }
            return candidatelList;

        } catch (Exception e) {
            // TODO: handle exception
            return candidatelList;
        }

    }

    @Override
    public List<CandidateDetailResponse> getCandidateDetail(String token, int activityId) {
//        List<Candidate> candidatelList = candidateRepository.findByActivityId(activityId);
        List<CandidateDetailResponse> candidateDetailResponseList = new ArrayList<>();
        List<CandidateDetailDTO> candidateDetailDTOList = candidateRepository.findAllByActivityId(activityId);
        for(CandidateDetailDTO candidateDetailDTO : candidateDetailDTOList){
            Candidate candidate = candidateDetailDTO.getCandidate();
            Account account = candidateDetailDTO.getAccount();
            User user = candidateDetailDTO.getUser();
            candidateDetailResponseList.add(new CandidateDetailResponse(candidate.getId(),
                    new UserDetailResponse(user, account), candidate.getActivityId(), candidate.getCertificate(), candidate.getDateCertificate().toString(),candidate.getCreatedAt().toString()));
        }
        return candidateDetailResponseList;
    }


}
