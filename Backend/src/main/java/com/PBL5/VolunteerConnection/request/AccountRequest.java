package com.PBL5.VolunteerConnection.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountRequest {
    private String account;
    private String password;
    private String name;
    private int role;
    private String tel;
    private String gender;
    private String address;
    private Date birthday;
    private String email;
    private String avatar;
    private String newPassword;
}
