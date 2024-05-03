package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
public class ActivityDetailResponse extends  ActivityResponse{
    private List<Post> postList;
    private int postNumber;
    private int applyForms;
    private Account account;
    private List<CandidateDetailResponse> candidateDetailResponseList;
    public ActivityDetailResponse(ActivityResponse activityResponse, List<Post> postList, int postNumber, int applyForms, Account account, List<CandidateDetailResponse> candidateDetailResponseList){
        super(activityResponse);
        this.postList = postList;
        this.postNumber = postList.size();
        this.applyForms = applyForms;
        this.account = account;
        this.candidateDetailResponseList = candidateDetailResponseList;
    }
}
