package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.response.*;

import java.util.List;

public interface ActivityService {
    StatusResponse createActivity(ActivityRequest activityRequest);

    StatusResponse updateActivity(ActivityRequest activityRequest);

    StatusResponse deleteActivity(ActivityRequest activityRequest);
    List<ActivityResponse> getAllActivity(ActivityRequest activityRequest);
    ActivityDetailResponse getActivityDetail(ActivityRequest activityRequest);
    List<Activity> selectAllActivitiesByCandidate(CandidateRequest activityRequest);
    Boolean hasActivity(String token, int id);
}
