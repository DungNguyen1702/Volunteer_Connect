package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Account;
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
public class AccountDetailResponse {
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
    public AccountDetailResponse(Account account){
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
