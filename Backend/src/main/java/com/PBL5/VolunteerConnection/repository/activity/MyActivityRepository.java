package com.PBL5.VolunteerConnection.repository.activity;

import com.PBL5.VolunteerConnection.model.Activity;

import java.sql.Date;
import java.util.List;

public interface MyActivityRepository {
    List<Activity> findAllByOrganizationIdAndTypeAndLocationAndDateStartAndDateEnd(int organizationId, Integer type, String location, Date dateStart, Date dateEnd);

}
