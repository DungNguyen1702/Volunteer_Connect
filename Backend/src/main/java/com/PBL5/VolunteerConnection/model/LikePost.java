package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
@Table(name = "LikePosts")
public class LikePost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id")
    private int id;
    @Column(name = "account_id")
    private int accountId;
    @Column(name = "post_id")
    private int postId;
    @Column(name = "createdAt")
    private Date createdAt;
    public LikePost(int accountId, int postId){
        this.accountId = accountId;
        this.postId = postId;
    }

    public LikePost() {

    }
}
