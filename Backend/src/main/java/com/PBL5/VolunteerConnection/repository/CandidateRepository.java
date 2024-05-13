package com.PBL5.VolunteerConnection.repository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

import com.PBL5.VolunteerConnection.dto.CandidateContactDTO;
import com.PBL5.VolunteerConnection.dto.CandidateDetailDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.Candidate;

@Repository
public interface CandidateRepository extends JpaRepository<Candidate, Integer> {
    List<Candidate> findByActivityId(int activityId);

    Candidate findById(int id);

    @Query(value = "SELECT new com.PBL5.VolunteerConnection.dto.CandidateDetailDTO(acc, u, c) " +
            "FROM Activity a " +
            "JOIN Candidate c ON a.id = c.activityId " +
            "JOIN User u ON c.userId = u.id " +
            "JOIN Account acc ON u.accountId = acc.id " +
            "WHERE a.id = :activityId AND a.isDeleted = false")
    List<CandidateDetailDTO> findAllByActivityId(@Param("activityId") int activityId);

    @Query(value = "SELECT new com.PBL5.VolunteerConnection.dto.CandidateContactDTO(acc, u, a, c.certificate) " +
            "FROM Account acc " +
            "LEFT JOIN User u ON u.accountId = acc.id " +
            "LEFT JOIN Candidate c ON c.userId  = u.id " +
            "LEFT JOIN Activity a ON a.id = c.activityId " +
            "WHERE acc.id = :accountId AND acc.isDeleted = false ")
    List<CandidateContactDTO> findByAccountId(@Param("accountId") int id);
    Candidate findByUserId(int userId);
}
