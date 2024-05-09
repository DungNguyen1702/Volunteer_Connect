package com.PBL5.VolunteerConnection.repository;


import java.util.List;

import com.PBL5.VolunteerConnection.dto.ActivityDTO;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.Activity;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Integer> {
    Activity findById(int id);

    Activity findByIdAndOrganizationId(int id, int organizationId);

    @Query(
            "SELECT a " +
                    "FROM Activity a " +
                    "JOIN Candidate c ON a.id = c.activityId " +
                    "JOIN User u ON c.userId = u.id " +
                    "JOIN Account acc ON u.accountId = acc.id " +
                    "WHERE acc.id = 1 AND a.isDeleted = false"
    )
    List<Activity> findActivitiesByAccountId(@Param("accountId") int accountId);

    List<Activity> findAllByOrganizationId(int organizationId);

    @Query("SELECT a, p, COUNT(r.id), COUNT(cm.id) " +
            "FROM Activity a " +
            "INNER JOIN RegistrationForm r ON r.activityId = a.id " +
            "JOIN Post p ON p.activityId = a.id " +
            "LEFT join PostComment cm on p.id = cm.postId " +
            "where a.id = :activityId and a.organizationId = :organizationId " +
            "GROUP BY p.id")
    List<Object[]> getActivityWithPostsAndCounts(@Param("activityId") int activityId, @Param("organizationId") int organizationId);

    @Query("SELECT distinct a, COUNT(s.id), COUNT(r.id), count(p.id), COUNT(cm.id)" +
            "FROM Activity a " +
            "LEFT join Candidate s on a.id = s.activityId " +
            "LEFT join RegistrationForm r on a.id = r.activityId " +
            "LEFT JOIN Post p on p.activityId = a.id " +
            "LEFT JOIN PostComment cm on p.id = cm.postId " +
            "where a.organizationId = :organizationId " +
            "GROUP BY a.id")
    List<Object[]> getListActivityDetail(@Param("organizationId") int organizationId);
    @Query("SELECT distinct a, COUNT(s.id), COUNT(r.id), count(p.id), COUNT(cm.id)" +
            "FROM Activity a " +
            "LEFT join Candidate s on a.id = s.activityId " +
            "LEFT join RegistrationForm r on a.id = r.activityId " +
            "LEFT JOIN Post p on p.activityId = a.id " +
            "LEFT JOIN PostComment cm on p.id = cm.postId " +
            "where s.userId = :userId " +
            "GROUP BY a.id")
    List<Object[]> getListActivityDetailByCandidate(@Param("userId") int userId);


}
