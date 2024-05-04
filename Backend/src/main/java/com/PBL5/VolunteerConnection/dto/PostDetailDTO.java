package com.PBL5.VolunteerConnection.dto;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostDetailDTO {
    private Activity activity;
    private long participants;
    private Post post;

}
