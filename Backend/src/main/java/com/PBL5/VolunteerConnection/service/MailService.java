package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.config.AuthenticationConfig;
import com.PBL5.VolunteerConnection.config.WebConfig;
import com.PBL5.VolunteerConnection.model.Mail;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class MailService {
    @Autowired
    private JavaMailSender javaMailSender;
    @Autowired
    private JwtService jwtService;
    public StatusResponse sendEmailResetPassword(String mail) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true);

        String token = jwtService.generateTokenResetPassword(mail);

        message.setFrom("khoile712003@gmail.com");
        message.setSubject("Request reset password");
        message.setText(String.format("""
                <div>
                    <a href="http://localhost:3000/auth/reset-password/%s" target="_blank">click link to verify</a>
                </div>
               """.formatted(token)), true);
        message.setTo(mail);

        javaMailSender.send(mimeMessage);
        return StatusResponse.builder().success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Send email successfully")).build();
    }
}
