package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.Post;
import com.PBL5.VolunteerConnection.request.ActivityRequest;
import com.PBL5.VolunteerConnection.request.PostRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostsActivitiesResponse {
    private int id;
    private ActivityResponse activity;
    private String title;
    private String image;
    private String content;
    private String createdAt;
    private long participants;
    private long comments;
    public PostsActivitiesResponse(ActivityResponse activity, Post post, long participants, long comments){
        this.id = post.getId();
        this.activity = activity;
        this.title = post.getTitle();
        this.image = post.getImage();
        this.content = post.getContent();
        this.createdAt = post.getCreatedAt().toString();
        this.participants = participants;
        this.comments = comments;

    }

}
