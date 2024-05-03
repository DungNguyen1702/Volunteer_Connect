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
public class AccountDetailResponse {
    private int id;
    private String account;
    private String name;
    private String avatar;
    private Boolean status;
    private int role;
    private Date createdAt;
    private Date updatedAt;
    private Boolean isDeleted;
    private String backgroundNoAva;
}
