package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.Notification;

public interface NotificationService {
    List<Notification> selectAll();

    List<Notification> selectAllByAccountId(int id);
}
