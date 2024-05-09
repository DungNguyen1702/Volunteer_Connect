package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.request.ActivityRequest;
import com.PBL5.VolunteerConnection.request.CandidateRequest;
import com.PBL5.VolunteerConnection.response.*;

import java.util.List;

public interface ActivityService {
    StatusResponse createActivity(String token, ActivityRequest activityRequest);

    StatusResponse updateActivity(String token, ActivityRequest activityRequest);

    StatusResponse deleteActivity(String token, ActivityRequest activityRequest);
    List<ActivityResponse> getAllActivity(String token);
    ActivityDetailResponse getActivityDetail(String token, int id);
    List<ActivityResponse> getAllActivityByCandidate(String token);

}
