package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface ActivityService {
    StatusResponse createActivity(Activity activity);

    StatusResponse updateActivity(Activity activity);

    StatusResponse deleteActivity(int id);
}
