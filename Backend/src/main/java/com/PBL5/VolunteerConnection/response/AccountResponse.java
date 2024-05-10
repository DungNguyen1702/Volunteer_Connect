package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.User;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountResponse {
    private int id;
    private String account;
    private String name;
    private String avatar;
    private Boolean status;
    private int role;
    private String createdAt;
    private String updatedAt;
    private Boolean isDeleted;
    private String backgroundNoAva;
    private int userId;
    private String tel;
    private String address;
    private String gender;
    private String birthday;
    private int activityNumber;
    public AccountResponse(Account account){
        this.id = account.getId();
        this.account = account.getAccount();
        this.name = account.getName();
        this.avatar = account.getAvatar();
        this.status = account.getStatus();
        this.role = account.getRole();
        this.createdAt = account.getCreatedAt().toString();
        this.updatedAt = null;
        if(account.getUpdatedAt() != null){
            this.updatedAt = account.getUpdatedAt().toString();
        }
        this.isDeleted = account.getIsDeleted();
        this.backgroundNoAva = account.getBackgroundNoAva();
    }
}
