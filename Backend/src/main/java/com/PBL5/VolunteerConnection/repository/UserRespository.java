package com.PBL5.VolunteerConnection.repository;

import com.PBL5.VolunteerConnection.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRespository extends JpaRepository<User, Integer> {
    User findByAccountId(int id);

    User findById(int id);
}
