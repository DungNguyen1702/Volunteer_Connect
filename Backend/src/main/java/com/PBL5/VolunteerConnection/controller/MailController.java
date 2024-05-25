package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.model.Mail;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.MailService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/mail")
public class MailController {
    @Autowired
    private MailService mailService;

    @GetMapping("/sendResetPassword/{mail}")
    public ResponseEntity<StatusResponse> sendMail(@PathVariable String mail) throws MessagingException {
        return ResponseEntity.ok(mailService.sendEmailResetPassword(mail));

    }

    @GetMapping("/sendVerifyEmail/{mail}")
    public ResponseEntity<StatusResponse> verifyEmail(@PathVariable String mail) throws MessagingException {
        return ResponseEntity.ok(mailService.sendEmailVerifyEmail(mail));
    }
}
