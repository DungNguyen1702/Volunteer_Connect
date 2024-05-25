package com.PBL5.VolunteerConnection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Notification;
import com.PBL5.VolunteerConnection.repository.NotificationRepository;

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

}
