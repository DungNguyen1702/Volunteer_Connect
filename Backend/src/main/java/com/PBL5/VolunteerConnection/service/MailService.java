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
                 We have received a request to reset the password for your account. If you requested a password reset, please click the link below to proceed:
                  
                  <div style="margin: 20px 0;">
                      <a href="http://localhost:3000/auth/reset-password/%s" target="_blank" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px;">Reset Password</a>
                  </div>
                  If you did not request a password reset, please ignore this email. Your password will not be changed, and you can continue to use your account as usual.
                  
                  To protect your account, we recommend that you do not share this link with anyone.
                  
                  If you need further assistance, please contact our customer support team .
                  
                  Thank you,
                 
                 [%s]
               """.formatted(token, "Volunteer Connection")), true);
        message.setTo(mail);

        javaMailSender.send(mimeMessage);
        return StatusResponse.builder().success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Send email successfully")).build();
    }
    public StatusResponse sendEmailVerifyEmail(String mail) throws MessagingException {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper message = new MimeMessageHelper(mimeMessage, true);

        String token = jwtService.generateTokenVerifyEmail(mail);

        message.setFrom("khoile712003@gmail.com");
        message.setSubject("Request verify Email");
        message.setText(String.format("""
                 
                 Thank you for registering an account at [%s]! To complete the registration process and activate your account, please verify your email address by clicking the link below:
                    <div style="margin: 20px 0;">
                       <a href="http://localhost:3000/auth/register/valid/%s" target="_blank" style="background-color: #4CAF50; color: white; padding: 10px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 5px;">Verify Email</a>
                    </div>
                    If you did not register an account at [Company Name], please ignore this email. Your account will not be activated, and your information will be deleted from our system shortly.
                                    
                     Instructions:
                     Click the "Verify Email" link.
                     You will be redirected to the verification page, and your account will be activated immediately.
                     After verification, you can log in to your account and start using our services.
                     If you encounter any issues during the verification process, please contact our customer support team.
                     Thank you.     
                 [%s]
               """.formatted("Volunteer Connection",token, "Volunteer Connection")), true);
        message.setTo(mail);
        System.out.println(token);
        javaMailSender.send(mimeMessage);
        return StatusResponse.builder().success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Send email successfully")).build();
    }
}
