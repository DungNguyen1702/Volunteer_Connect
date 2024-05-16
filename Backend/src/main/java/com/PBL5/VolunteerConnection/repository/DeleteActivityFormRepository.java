package com.PBL5.VolunteerConnection.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.PBL5.VolunteerConnection.model.DeleteActivityForm;

public interface DeleteActivityFormRepository extends JpaRepository<DeleteActivityForm, Integer> {
    DeleteActivityForm findById(int id);

}
