package com.PBL5.VolunteerConnection.response;

import java.time.LocalDate;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.DeleteActivityForm;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DeleteFormResponse {
    private int id;
    private int activity_id;
    private String reason;
    private int isAccept;
    private LocalDate createdAt;
    private Activity activity;
    private String nameAccount;

    public DeleteFormResponse(DeleteActivityForm deleteActivityForm, Activity activity) {
        this.id = deleteActivityForm.getId();
        this.activity_id = deleteActivityForm.getActivity_id();
        this.reason = deleteActivityForm.getReason();
        this.isAccept = deleteActivityForm.getIsAccept();
        this.createdAt = deleteActivityForm.getCreatedAt();
        this.activity = activity;
        this.nameAccount = activity.getAccount().getName();
    }
}
