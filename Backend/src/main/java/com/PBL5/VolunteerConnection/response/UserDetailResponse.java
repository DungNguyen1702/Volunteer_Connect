package com.PBL5.VolunteerConnection.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDetailResponse {
    private int id;
    private AccountDetailResponse account;
    private String tel;
    private String address;
    private String gender;
    private Date birthday;
    private Date createdAt;
    private Date updatedAt;
    private Boolean isDeleted;
}
