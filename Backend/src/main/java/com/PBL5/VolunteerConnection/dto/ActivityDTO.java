package com.PBL5.VolunteerConnection.dto;

import com.PBL5.VolunteerConnection.model.Activity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActivityDTO {
    private Activity activity;
    private long participants;
    private long applyFormNumbers;
    private long postNumbers;
    private long comments;
}
