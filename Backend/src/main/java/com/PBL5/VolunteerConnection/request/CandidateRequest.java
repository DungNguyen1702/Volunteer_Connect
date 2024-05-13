package com.PBL5.VolunteerConnection.request;

import java.sql.Date;
import java.time.LocalDate;

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
    private LocalDate dateCertificate;
    private int activityType;
    private String activityLocation;
}
