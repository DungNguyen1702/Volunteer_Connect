package com.PBL5.VolunteerConnection.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
    private String account;
    private String password;
    private String name;
    private int role;
    private String tel;
    private String gender;
    private String address;
    private Date birthday;
}
