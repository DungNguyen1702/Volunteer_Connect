package com.PBL5.VolunteerConnection.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.Candidate;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
    List<Candidate> findByActivityId(int activityId);
    Candidate findById(int id);
}
