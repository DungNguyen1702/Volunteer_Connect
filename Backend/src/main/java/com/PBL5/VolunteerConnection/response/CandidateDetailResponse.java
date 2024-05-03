package com.PBL5.VolunteerConnection.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CandidateDetailResponse {
    private int id;
    private UserDetailResponse user;
    private int activity_id;
    private String certificate;
    private Date date_earn_certificate;
    private Date createAt;

}
