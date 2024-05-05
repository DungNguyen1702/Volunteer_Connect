package com.PBL5.VolunteerConnection.model;

import lombok.Data;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "PostComments")
public class PostComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "comment_parent_id")
    private Integer comment_parentId;
    @Column(name = "post_id")
    private int postId;
    @Column(name = "content")
    private String content;
    @Column(name = "account_id")
    private int accountId;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updatedAt")
    private Date updatedAt;
    @Column(name = "isDeleted")
    private boolean isDeleted;

    public PostComment() {

    }

    public PostComment(Integer comment_parentId, int postId, String content, int accountId, boolean isDeleted) {
        this.comment_parentId = comment_parentId;
        // if (comment_parentId == 0) {
        // this.comment_parentId = this.id;
        // }
        this.postId = postId;
        this.content = content;
        this.accountId = accountId;
        this.isDeleted = isDeleted;
        this.createdAt = Date.valueOf(LocalDate.now());
        this.updatedAt = Date.valueOf(LocalDate.now());
    }

    public PostComment(int postId, String content, int accountId) {

        // if (comment_parentId == 0) {
        // this.comment_parentId = this.id;
        // }
        this.postId = postId;
        this.content = content;
        this.accountId = accountId;

        this.createdAt = Date.valueOf(LocalDate.now());
        this.updatedAt = Date.valueOf(LocalDate.now());
    }
}
