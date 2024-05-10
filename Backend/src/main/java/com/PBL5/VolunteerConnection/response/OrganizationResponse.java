package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Activity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrganizationResponse {
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
    private int activityNumber;
    private List<ActivityResponse> activities = new ArrayList<>();
    public OrganizationResponse(Account account, List<Activity> activities){
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
