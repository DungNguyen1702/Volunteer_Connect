package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.User;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactResponse {
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
    private UserResponse user;
    private int activityNumber;
    private int earnedCertificateNumber;
    private List<ActivityResponse> activities = new ArrayList<>();
    public ContactResponse(Account account, User user, List<Activity> activities, int earnedCertificateNumber){
        this.id = account.getId();
        this.account = account.getAccount();
        this.name = account.getName();
        this.avatar = account.getAvatar();
        this.status = account.getStatus();
        this.role = account.getRole();
        this.createdAt = account.getCreatedAt() != null ? account.getCreatedAt().toString() : null;
        this.updatedAt =  account.getUpdatedAt() != null ? account.getCreatedAt().toString() : null;
        this.isDeleted = account.getIsDeleted();
        this.backgroundNoAva = account.getBackgroundNoAva();
        this.user = new UserResponse(user);
        this.activityNumber = activities.size();
        for (Activity activity : activities){
            this.activities.add(new ActivityResponse(activity, 0));
        }
        this.earnedCertificateNumber = earnedCertificateNumber;
    }
    public ContactResponse(Account account, List<Activity> activities){
        this.id = account.getId();
        this.account = account.getAccount();
        this.name = account.getName();
        this.avatar = account.getAvatar();
        this.status = account.getStatus();
        this.role = account.getRole();
        this.createdAt = account.getCreatedAt() != null ? account.getCreatedAt().toString() : null;
        this.updatedAt =  account.getUpdatedAt() != null ? account.getCreatedAt().toString() : null;
        this.isDeleted = account.getIsDeleted();
        this.backgroundNoAva = account.getBackgroundNoAva();
        this.activityNumber = activities.size();
        for (Activity activity : activities){
            this.activities.add(new ActivityResponse(activity, 0));
        }
    }

}
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
class UserResponse{
    private int id;
    private int accountId;
    private String tel;
    private String address;
    private String gender;
    private String birthday;
    public UserResponse(User user){
        this.id = user.getId();
        this.accountId = user.getAccountId();
        this.tel = user.getTel();
        this.address = user.getAddress();
        this.gender = user.getGender();
        this.birthday = user.getBirthday() != null ? user.getBirthday().toString() : null;
    }
}
