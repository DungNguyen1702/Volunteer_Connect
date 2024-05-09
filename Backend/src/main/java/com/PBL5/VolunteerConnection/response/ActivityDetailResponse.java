package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.dto.PostActivityDetailDTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
public class ActivityDetailResponse{
    protected int id;
    protected String image;
    protected String email;
    protected String name;
    protected int comments;
    protected String deadline;
    protected String dateStart;
    protected String dateEnd;
    protected String createdAt;
    protected String updateAt;
    protected int type;
    protected int country;
    protected String location;
    protected int organizationId;
    protected Boolean isDeleted;
    protected String content;
    private List<PostActivityDetailDTO> postList;
    private long postNumber;
    private long applyForms;
    private AccountResponse organization;
    private List<CandidateDetailResponse> candidates;
    private int participants;
    public ActivityDetailResponse(ActivityResponse activity, List<PostActivityDetailDTO> postList, AccountResponse organization, List<CandidateDetailResponse> candidateDetailResponseList){
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
        this.postList = postList;
        this.postNumber = activity.getPostNumber();
        this.applyForms = activity.getApplyFormNumber();
        this.organization = organization;
        this.candidates = candidateDetailResponseList;
        this.participants = candidateDetailResponseList.size();
    }
}
