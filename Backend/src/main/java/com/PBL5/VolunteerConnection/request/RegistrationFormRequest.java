package com.PBL5.VolunteerConnection.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegistrationFormRequest {
    private int id;
    private int activityId;
    private int userId;
    private int isConfirmed;
}
