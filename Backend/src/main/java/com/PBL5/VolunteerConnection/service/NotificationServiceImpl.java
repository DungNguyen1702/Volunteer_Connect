package com.PBL5.VolunteerConnection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Notification;
import com.PBL5.VolunteerConnection.repository.NotificationRepository;
import com.PBL5.VolunteerConnection.request.NotificationRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class NotificationServiceImpl implements NotificationService {
    @Autowired
    private NotificationRepository notificationRepository;

    @Override
    public List<Notification> selectAll() {
        // TODO Auto-generated method stub
        return notificationRepository.findAll();
    }

    @Override
    public List<Notification> selectAllByAccountId(int id) {
        // TODO Auto-generated method stub
        return notificationRepository.findByAccountId(id);
    }

    @Override
    public StatusResponse updateNotification(String token, NotificationRequest notificationRequest) {
        // TODO Auto-generated method stub
        try {
            Notification notification = notificationRepository.findById(notificationRequest.getId());
            notification.setStatus(notificationRequest.getStatus());
            System.out.println(notification.getStatus());
            notificationRepository.save(notification);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                            .body("Notification has been updated sucessfully!!"))
                    .build();
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

}
