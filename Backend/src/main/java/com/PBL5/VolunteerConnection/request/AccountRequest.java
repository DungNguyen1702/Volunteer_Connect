package com.PBL5.VolunteerConnection.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountRequest {
    private int id;
    private String account;
    private String password;
    private String name;
    private int role;
    private String tel;
    private String gender;
    private String address;
    private LocalDate birthday;
    private String email;
    private String avatar;
    private String newPassword;
    private Boolean isDeleted;
    private Boolean isValid;
    private String backgroundNoAva;
}
