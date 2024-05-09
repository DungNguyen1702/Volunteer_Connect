package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Post;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostResponse {
    private int id;
    private int activityId;
    private String title;
    private String image;
    private String content;
    private String createdAt;
    private String updateAt;
    public PostResponse(Post post) {
        this.activityId = post.getActivityId();
        this.title = post.getTitle();
        this.image = post.getImage();
        this.content = post.getContent();
        this.createdAt = post.getCreatedAt().toString();
        this.updateAt = null;
        if(post.getUpdateAt() != null){
            this.updateAt = post.getUpdateAt().toString();
        }
    }
}
