package com.PBL5.VolunteerConnection.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.RegistrationForm;
import java.util.List;

@Repository
public interface RegistrationFormRepository extends JpaRepository<RegistrationForm, Integer> {
    RegistrationForm findById(int id);

    List<RegistrationForm> findByActivityId(int activityId);

    List<RegistrationForm> findByActivityIdAndIsConfirmed(int activityId, int isConfirmed);
}
