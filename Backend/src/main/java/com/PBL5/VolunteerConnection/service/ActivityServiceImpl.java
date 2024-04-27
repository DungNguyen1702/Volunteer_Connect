package com.PBL5.VolunteerConnection.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class ActivityServiceImpl implements ActivityService {
    @Autowired
    private ActivityRepository activityRepository;

    @Override
    public StatusResponse createActivity(Activity activity) {
        // TODO Auto-generated method stub
        try {
            Activity creActivity = new Activity(activity.getImage(), activity.getEmail(), activity.getName(),
                    activity.getType(),
                    activity.getDeadline(), activity.getDateStart(), activity.getDateEnd(), activity.getCountry(),
                    activity.getLocation(), activity.getOrganizationId(), activity.getIsDeleted(),
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
    public StatusResponse updateActivity(Activity activity) {
        // TODO Auto-generated method stub
        try {
            Activity updateActivity = activityRepository.findById(activity.getId());
            updateActivity.setImage(activity.getImage());
            updateActivity.setEmail(activity.getEmail());
            updateActivity.setDeadline(activity.getDeadline());
            updateActivity.setDateStart(activity.getDateStart());
            updateActivity.setDateEnd(activity.getDateEnd());
            updateActivity.setCountry(activity.getCountry());
            updateActivity.setLocation(activity.getLocation());
            updateActivity.setOrganizationId(activity.getOrganizationId());
            updateActivity.setIsDeleted(activity.getIsDeleted());
            updateActivity.setContent(activity.getContent());
            updateActivity.setCreatedAt(activity.getCreatedAt());
            updateActivity.setUpdateAt(activity.getUpdateAt());
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
    public StatusResponse deleteActivity(int id) {
        // TODO Auto-generated method stub
        try {
            activityRepository.deleteById(id);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Activity has been deleted sucessfully!!"))
                    .build();
        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

}
