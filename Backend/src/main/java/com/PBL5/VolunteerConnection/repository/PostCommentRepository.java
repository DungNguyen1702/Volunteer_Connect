package com.PBL5.VolunteerConnection.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.PostComment;

@Repository
public interface PostCommentRepository extends JpaRepository<PostComment, Integer> {
    List<PostComment> findByPostId(int postId);

    PostComment findById(int id);

    // List<PostComment> findByComment_parentId(int comment_parentId);

    List<PostComment> findAll();
}
