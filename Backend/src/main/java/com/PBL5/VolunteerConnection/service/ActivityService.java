package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.response.ActivityRequest;
import com.PBL5.VolunteerConnection.response.ActivityResponse;
import com.PBL5.VolunteerConnection.response.AllActivityResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface ActivityService {
    StatusResponse createActivity(ActivityRequest activityRequest);

    StatusResponse updateActivity(ActivityRequest activityRequest);

    StatusResponse deleteActivity(ActivityRequest activityRequest);
    AllActivityResponse getAllActivity(ActivityRequest token);
    Boolean hasActivity(String token, int organizationId);
}
