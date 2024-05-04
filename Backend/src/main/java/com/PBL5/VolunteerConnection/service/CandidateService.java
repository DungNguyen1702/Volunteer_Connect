package com.PBL5.VolunteerConnection.service;


import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.response.CandidateDetailResponse;
import com.PBL5.VolunteerConnection.request.CandidateRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

import java.util.List;

public interface CandidateService {
    StatusResponse createCandidate(String token, CandidateRequest candidate);

    StatusResponse updateCandidate(String token, CandidateRequest candidate);

    StatusResponse deleteCandidate(String token, CandidateRequest candidate);

    List<Candidate> selectAllCandidate(String token, CandidateRequest candidate);
    List<CandidateDetailResponse> getCandidateDetail(String token, int id);
}
