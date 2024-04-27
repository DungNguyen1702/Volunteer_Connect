package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.response.ActivityRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.response.StatusResponse;

import java.sql.Date;
import java.time.LocalDate;

@Service
public class ActivityServiceImpl implements ActivityService {
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private AccountService accountService;

    @Override
    public StatusResponse createActivity(ActivityRequest activity) {
        // TODO Auto-generated method stub

        try {
            int organizationId = accountService.getAccountId(activity.getToken());
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
    public StatusResponse updateActivity(ActivityRequest updateReq) {
        // TODO Auto-generated method stub
        try {
            Activity updateActivity = activityRepository.findById(updateReq.getId());
            if (hasActivity(updateReq.getToken(),updateActivity.getOrganizationId())){
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
            }
            else{
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Activity " + updateActivity.getName() + "cant not be updated because you are not owner!!"))
                        .build();
            }
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
    public StatusResponse deleteActivity(ActivityRequest deleteRequest) {
        // TODO Auto-generated method stub
        try {
            Activity deleteActivity = activityRepository.findById(deleteRequest.getId());
            if (hasActivity(deleteRequest.getToken(),deleteActivity.getOrganizationId())){
                deleteActivity.setIsDeleted(true);
                activityRepository.save(deleteActivity);
            }
            else{
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Activity " + deleteActivity.getName() + "cant not be deleted because you are not owner!!"))
                        .build();
            }
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Activity has been deleted sucessfully!!"))
                    .build();
        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }
    public Boolean hasActivity(String token, int organizationId){
        int accountId = accountService.getAccountId(token);
        return accountId == organizationId;
    }

}
