package com.PBL5.VolunteerConnection.dto;

import com.PBL5.VolunteerConnection.model.Post;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PostActivityDetailDTO {
    private int id;
    private int activityId;
    private String title;
    private String image;
    private String content;
    private String createdAt;
    private String updateAt;
    private long comments;
    public PostActivityDetailDTO(Post post, long comments){
        this.id = post.getId();
        this.activityId = post.getActivityId();
        this.title = post.getTitle();
        this.image = post.getImage();
        this.content = post.getContent();
        this.createdAt = post.getCreatedAt().toString();
        this.updateAt = null;
        if (post.getUpdateAt() != null){

            this.updateAt = post.getUpdateAt().toString();
        }
        this.comments = comments;
    }

}
