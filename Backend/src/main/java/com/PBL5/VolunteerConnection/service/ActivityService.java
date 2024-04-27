package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.response.ActivityDetailResponse;
import com.PBL5.VolunteerConnection.response.ActivityRequest;
import com.PBL5.VolunteerConnection.response.ActivityResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;

import java.util.List;

public interface ActivityService {
    StatusResponse createActivity(ActivityRequest activityRequest);

    StatusResponse updateActivity(ActivityRequest activityRequest);

    StatusResponse deleteActivity(ActivityRequest activityRequest);
    List<ActivityResponse> getAllActivity(ActivityRequest activityRequest);
    ActivityDetailResponse getActivityDetail(ActivityRequest activityRequest);
    Boolean hasActivity(String token, int organizationId);
}
