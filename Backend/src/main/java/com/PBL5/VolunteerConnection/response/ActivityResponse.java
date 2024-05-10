package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Activity;
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
public class ActivityResponse {
    protected String error_message;
    protected int id;
    protected String image;
    protected String email;
    protected String name;
    protected String deadline;
    protected String dateStart;
    protected String dateEnd;
    protected String createdAt;
    protected String updateAt;
    protected int type;
    protected int country;
    protected String location;
    protected int organizationId;
    protected Boolean isDeleted;
    protected String content;
    protected long postNumber;
    protected long participants;
    protected long comments;
    protected long applyFormNumber;

    public ActivityResponse(Activity activity, long applyFormNumber, long comments, long participants, long posts) {
        this.id = activity.getId();
        this.image = activity.getImage();
        this.email = activity.getEmail();
        this.name = activity.getName();
        this.type = activity.getType();
        this.deadline = activity.getDeadline().toString();
        this.dateStart = activity.getDateStart().toString();
        this.dateEnd = activity.getDateEnd().toString();
        this.country = activity.getCountry();
        this.location = activity.getLocation();
        this.organizationId = activity.getOrganizationId();
        this.isDeleted = activity.getIsDeleted();
        this.content = activity.getContent();
        this.createdAt = activity.getCreatedAt().toString();
        this.updateAt = activity.getUpdateAt().toString();
        this.applyFormNumber = applyFormNumber;
        this.comments = comments;
        this.participants = participants;
        this.postNumber = posts;
    }
    public ActivityResponse(Activity activity, long participants) {
        this.id = activity.getId();
        this.image = activity.getImage();
        this.email = activity.getEmail();
        this.name = activity.getName();
        this.type = activity.getType();
        this.deadline = activity.getDeadline().toString();
        this.dateStart = activity.getDateStart().toString();
        this.dateEnd = activity.getDateEnd().toString();
        this.country = activity.getCountry();
        this.location = activity.getLocation();
        this.organizationId = activity.getOrganizationId();
        this.isDeleted = activity.getIsDeleted();
        this.content = activity.getContent();
        this.createdAt = activity.getCreatedAt().toString();
        this.updateAt = activity.getUpdateAt().toString();
        this.participants = participants;

    }


}
