package com.PBL5.VolunteerConnection.dto;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CandidateDetailDTO {
    private Account account;
    private User user;
    private Candidate candidate;


}
