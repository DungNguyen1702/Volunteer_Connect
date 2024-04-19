package com.PBL5.VolunteerConnection.repository;

import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRespository extends JpaRepository<User, Integer> {
    User findById(int id);
}
