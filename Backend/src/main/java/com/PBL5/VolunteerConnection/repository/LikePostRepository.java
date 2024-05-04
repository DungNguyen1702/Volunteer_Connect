package com.PBL5.VolunteerConnection.repository;

import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.LikePost;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikePostRepository  extends JpaRepository<LikePost, Integer> {
    List<LikePost> findAllByAccountId(int accountId);
    LikePost findByAccountIdAndPostId(int accountId, int postId);
}
