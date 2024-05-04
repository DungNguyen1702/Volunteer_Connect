package com.PBL5.VolunteerConnection.repository;

import com.PBL5.VolunteerConnection.dto.CandidateDetailDTO;
import com.PBL5.VolunteerConnection.dto.PostDetailDTO;
import com.PBL5.VolunteerConnection.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRespository extends JpaRepository<Post, Integer> {
    List<Post> findByActivityId(int activityId);

    Post findById(int id);

//    List<Post> findAll();
    @Query( value = "SELECT new com.PBL5.VolunteerConnection.dto.PostDetailDTO(a, COUNT(DISTINCT c.id), s) " +
            "FROM Activity a " +
            "JOIN Post s ON s.activityId = a.id " +
            "LEFT JOIN Candidate c ON a.id = c.activityId " +
            "GROUP BY a.id, s.id")
    List<PostDetailDTO> findAllPostsActivities();

}
