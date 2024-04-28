// package com.PBL5.VolunteerConnection.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import com.PBL5.VolunteerConnection.model.Candidate;

// import com.PBL5.VolunteerConnection.repository.ActivityRepository;
// import com.PBL5.VolunteerConnection.repository.CandidateRepository;
// import com.PBL5.VolunteerConnection.repository.PostRespository;
// import com.PBL5.VolunteerConnection.response.CandidateRequest;
// import com.PBL5.VolunteerConnection.response.StatusResponse;

// public class CandidateServiceImpl implements CandidateService {
// @Autowired
// private CandidateRepository candidateRepository;
// @Autowired
// private ActivityService activityService;
// @Autowired
// private ActivityRepository activityRepository;

// @Override
// public StatusResponse createCandidate(CandidateRequest candidate) {
// // TODO Auto-generated method stub
// try {
// int organizationId =
// activityRepository.findById(candidate.getActivityId()).getOrganizationId();
// if (activityService.hasActivity(candidate.getToken(), organizationId)) {
// Candidate createCandidate = new Candidate(candidate.getUserId(),
// candidate.getActivityId(),
// candidate.getCertificate(), candidate.getDateCertificate());
// candidateRepository.save(createCandidate);
// return StatusResponse.builder()
// .success(ResponseEntity.status(HttpStatus.CREATED)
// .body("Candidate " + createCandidate.getUserId() + "has been created
// sucessfully!!"))
// .build();
// } else {
// return StatusResponse.builder()
// .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
// .body("Candidate cant not be updated because you are not owner!!"))
// .build();
// }

// } catch (Exception e) {
// return StatusResponse.builder()
// .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception
// from server!! " + e))
// .build();
// }
// }

// @Override
// public StatusResponse updateCandidate(CandidateRequest candidate) {
// // TODO Auto-generated method stub
// throw new UnsupportedOperationException("Unimplemented method
// 'updateCandidate'");
// }

// @Override
// public StatusResponse deleteCandidate(CandidateRequest candidate) {
// // TODO Auto-generated method stub
// throw new UnsupportedOperationException("Unimplemented method
// 'deleteCandidate'");
// }

// @Override
// public StatusResponse SelectAllCandidate(CandidateRequest candidate) {
// // TODO Auto-generated method stub
// throw new UnsupportedOperationException("Unimplemented method
// 'SelectAllCandidate'");
// }

// }
