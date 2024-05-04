package com.PBL5.VolunteerConnection.repository;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

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
    @Query(value =
            "SELECT new com.PBL5.VolunteerConnection.dto.CandidateDetailDTO(c, u, acc) " +
                    "FROM Activity a " +
                    "JOIN Candidate c ON a.id = c.activityId " +
                    "JOIN User u ON c.userId = u.id " +
                    "JOIN Account acc ON u.accountId = acc.id " +
                    "WHERE acc.id = 1 AND a.isDeleted = false"
    )
    List<CandidateDetailDTO> findAllByActivityId(@Param("activityId") int activityId);

}
