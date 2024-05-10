package com.PBL5.VolunteerConnection.repository;

import com.PBL5.VolunteerConnection.dto.PostActivitiesDTO;
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
    @Query( value = "SELECT new com.PBL5.VolunteerConnection.dto.PostActivitiesDTO(a, COUNT(DISTINCT c.id), s) " +
            "FROM Activity a " +
            "JOIN Post s ON s.activityId = a.id " +
            "LEFT JOIN Candidate c ON a.id = c.activityId " +
            "GROUP BY a.id, s.id")
    List<PostActivitiesDTO> findAllPostsActivities();
    @Query( "SELECT p " +
            "FROM Account a " +
            "JOIN LikePost s ON s.accountId = a.id " +
            "JOIN Post p ON p.id = s.postId " +
            "where a.id = :accountId")
    List<Post> findAllPostByAccountId(@Param("accountId") int accountId);
    @Query( "SELECT new com.PBL5.VolunteerConnection.dto.PostDetailDTO (a, p, acc, COUNT(c.id)) " +
            "from Post p " +
            "join Activity a on p.activityId = a.id " +
            "join Account acc on acc.id = a.organizationId " +
            "left join Candidate c on a.id = c.activityId " +
            "where p.id = :id " +
            "GROUP BY (p.id)")
    PostDetailDTO findPostDetailById(@Param("id") int id);
}
