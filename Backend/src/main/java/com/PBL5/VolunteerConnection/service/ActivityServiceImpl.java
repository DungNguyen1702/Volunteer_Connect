package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.repository.AccountRepository;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.request.ActivityRequest;
import com.PBL5.VolunteerConnection.request.CandidateRequest;
import com.PBL5.VolunteerConnection.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActivityServiceImpl implements ActivityService {
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private AccountService accountService;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRespository userRespository;
    @Autowired
    private CandidateService candidateService;
    @Override
    public StatusResponse createActivity(String token, ActivityRequest activity) {
        // TODO Auto-generated method stub
        try {

            int organizationId = jwtService.getId(token);
            Activity creActivity = new Activity(activity.getImage(), activity.getEmail(), activity.getName(),
                                        activity.getType(), activity.getDeadline(), activity.getDateStart(), activity.getDateEnd(), activity.getCountry(),
                                        activity.getLocation(), organizationId,
                                        activity.getContent());
            activityRepository.save(creActivity);
            return StatusResponse.builder().success(ResponseEntity.status(HttpStatus.CREATED)
                    .body("Activity " + creActivity.getName() + "has been created sucessfully!!")).build();
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse updateActivity(String token, ActivityRequest updateReq) {
        // TODO Auto-generated method stub
        try {

            Activity updateActivity = activityRepository.findById(jwtService.getId(token));
            updateActivity.setImage(updateReq.getImage());
            updateActivity.setEmail(updateReq.getEmail());
            updateActivity.setDeadline(updateReq.getDeadline());
            updateActivity.setDateStart(updateReq.getDateStart());
            updateActivity.setDateEnd(updateReq.getDateEnd());
            updateActivity.setCountry(updateReq.getCountry());
            updateActivity.setLocation(updateReq.getLocation());
            updateActivity.setContent(updateReq.getContent());
            updateActivity.setUpdateAt(Date.valueOf(LocalDate.now()));
            activityRepository.save(updateActivity);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                            .body("Activity " + updateActivity.getName() + "has been updated sucessfully!!"))
                    .build();
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse deleteActivity(String token, ActivityRequest deleteRequest) {
        // TODO Auto-generated method stub
        try {

            Activity deleteActivity = activityRepository.findById(jwtService.getId(token));
                deleteActivity.setIsDeleted(true);
                activityRepository.save(deleteActivity);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Activity has been deleted sucessfully!!"))
                    .build();
        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }



    @Override
    public List<ActivityResponse> getAllActivity(String token) {
        int organizationId = jwtService.getId(token);
//        List<Activity> activityList = myActivityRepository.findAllByOrganizationIdAndTypeAndLocationAndDateStartAndDateEnd(
//                organizationId,
//                token.getType(),
//                token.getLocation(),
//                token.getDateStart(),
//                token.getDateEnd());
        List<Activity> activityList = activityRepository.findAllByOrganizationId(organizationId);
        List<ActivityResponse> activityResponseList = new ArrayList<>();
        for (Activity activity : activityList) {
            activityResponseList.add(new ActivityResponse(activity));
        }
//        List<Activity> activities = activityRepository.findAllByOrganizationId(organizationId);
//        List<Activity> filteredActivities = activities.stream()
//                .filter(activity ->
//                        (activityRequest.getType() == null || activity.getLocation().equals(activityRequest.getActivityLocation())) &&
//                                (activityRequest.getActivityType() == 0 || activity.getType() == activityRequest.getActivityType())
//                )
//                .collect(Collectors.toList());
        return activityResponseList;
//        return AllActivityResponse.builder().activityResponseList(activityResponseList).build();

    }

    @Override
    public ActivityDetailResponse getActivityDetail(String token, int id) {
        int organizationId = jwtService.getId(token);
        System.out.print(organizationId);
        Activity activityDetail = activityRepository.findByIdAndOrganizationId(id, organizationId);
        System.out.print(activityDetail);
        Account organization = accountRepository.findById(activityDetail.getOrganizationId());
        List<CandidateDetailResponse> candidates = candidateService.getCandidateDetail(token, id);
        return new ActivityDetailResponse(new ActivityResponse(activityDetail), null, 0, 0,
                new AccountDetailResponse(organization), candidates);
    }
    @Override
    public List<Activity> selectAllActivitiesByCandidate(String token, CandidateRequest activityRequest) {

        int id = jwtService.getId(token);
            List<Activity> activities = activityRepository.findActivitiesByAccountId(id);
            List<Activity> filteredActivities = activities.stream()
                    .filter(activity ->
                            (activityRequest.getActivityLocation() == null || activity.getLocation().equals(activityRequest.getActivityLocation())) &&
                                    (activityRequest.getActivityType() == 0 || activity.getType() == activityRequest.getActivityType())
                    )
                    .collect(Collectors.toList());
            return  filteredActivities;
    }
}
