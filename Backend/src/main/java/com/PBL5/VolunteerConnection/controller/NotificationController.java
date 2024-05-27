package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.Notification;
import com.PBL5.VolunteerConnection.request.NotificationRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.NotificationService;

@RestController
@RequestMapping("api/v1/notification")
public class NotificationController {
    @Autowired
    private NotificationService notificationService;

    @GetMapping("/selectAll")
    ResponseEntity<List<Notification>> getAll() {
        return ResponseEntity.ok(notificationService.selectAll());
    }

    @GetMapping("/selectAllByAccId")
    ResponseEntity<List<Notification>> getAllByAccId(@RequestHeader("Authorization") String token,
            @RequestParam("id") int id) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(notificationService.selectAllByAccountId(id));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updateT(@RequestHeader("Authorization") String token,
            @RequestBody NotificationRequest notificationRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(notificationService.updateNotification(token, notificationRequest));
    }
}
