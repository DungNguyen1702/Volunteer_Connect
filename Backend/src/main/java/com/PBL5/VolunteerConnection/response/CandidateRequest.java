package com.PBL5.VolunteerConnection.response;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CandidateRequest {
    private String token;
    private int id;
    private int userId;
    private int activityId;
    private int organizationId;
    private String certificate;
    private Date dateCertificate;
}
