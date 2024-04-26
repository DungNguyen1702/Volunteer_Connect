package com.PBL5.VolunteerConnection.repository;

import com.PBL5.VolunteerConnection.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PostRespository extends JpaRepository<Post, Integer> {
    List<Post> findByActivityId(int activityId);
    Post findById(int id);
}
