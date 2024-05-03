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
public class ActivityResponse extends Activity{
    protected int participants;
    protected int comments;

    public ActivityResponse(Activity activity) {
        this.id = activity.getId();
        this.image = activity.getImage();
        this.email = activity.getEmail();
        this.name = activity.getName();
        this.type = activity.getType();
        this.deadline = activity.getDeadline();
        this.dateStart = activity.getDateStart();
        this.dateEnd = activity.getDateEnd();
        this.country = activity.getCountry();
        this.location = activity.getLocation();
        this.organizationId = activity.getOrganizationId();
        this.isDeleted = activity.getIsDeleted();
        this.content = activity.getContent();
        this.createdAt = activity.getCreatedAt();
        this.updateAt = activity.getUpdateAt();

    }

}
