package com.PBL5.VolunteerConnection.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.Activity;

@Repository
public interface ActivityRepository extends JpaRepository<Activity, Integer> {
    List<Activity> findAllByOrganizationId(int organizationId);

    Activity findById(int id);
}
