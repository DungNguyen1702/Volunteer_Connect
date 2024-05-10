package com.PBL5.VolunteerConnection.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.PostComment;

@Repository
public interface PostCommentRepository extends JpaRepository<PostComment, Integer> {
    List<PostComment> findByPostId(int postId);

    PostComment findById(int id);

    // List<PostComment> findByComment_parentId(int comment_parentId);
    @SuppressWarnings("null")
    List<PostComment> findAll();
    @Query( "SELECT new com.PBL5.VolunteerConnection.dto.PostDetailDTO (a, p, acc, COUNT(distinct c.id)) " +
            "from Post p " +
            "join Activity a on p.activityId = a.id " +
            "join Account acc on acc.id = a.organizationId " +
            "left join Candidate c on a.id = c.activityId " +
            "where p.id = :id " +
            "GROUP BY (p.id)")
    List<PostComment> findAllByPostId();
}
