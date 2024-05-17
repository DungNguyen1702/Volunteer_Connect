package com.PBL5.VolunteerConnection.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.DeleteActivityForm;
import java.util.List;

@Repository
public interface DeleteActivityFormRepository extends JpaRepository<DeleteActivityForm, Integer> {
    DeleteActivityForm findById(int id);

    List<DeleteActivityForm> findByIsAccept(int accept);
}
