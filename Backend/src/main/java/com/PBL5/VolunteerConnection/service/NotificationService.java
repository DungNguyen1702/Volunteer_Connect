package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.Notification;
import com.PBL5.VolunteerConnection.request.NotificationRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface NotificationService {
    List<Notification> selectAll();

    List<Notification> selectAllByAccountId(int id);

    StatusResponse updateNotification(String token, NotificationRequest notificationRequest);

}
