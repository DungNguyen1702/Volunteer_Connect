package com.PBL5.VolunteerConnection.service;


import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.response.CandidateRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

import java.util.List;

public interface CandidateService {
    StatusResponse createCandidate(CandidateRequest candidate);

    StatusResponse updateCandidate(CandidateRequest candidate);

    StatusResponse deleteCandidate(CandidateRequest candidate);

    List<Candidate> selectAllCandidate(CandidateRequest candidate);
}
