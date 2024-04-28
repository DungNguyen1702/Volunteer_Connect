package com.PBL5.VolunteerConnection.repository.activity;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.Activity;
@Repository
public interface ActivityRepository extends JpaRepository<Activity, Integer> {
    Activity findById(int id);
    @Query(
                "SELECT a " +
                    "FROM Activity a " +
                    "JOIN Candidate c ON a.id = c.activityId " +
                    "JOIN User u ON c.userId = u.id " +
                    "JOIN Account acc ON u.accountId = acc.id " +
                    "WHERE acc.id = 1 AND a.isDeleted = false"
    )
    List<Activity> findActivitiesByAccountId(@Param("accountId") int accountId);
}
