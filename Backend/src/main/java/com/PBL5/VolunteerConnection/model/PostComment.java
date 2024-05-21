package com.PBL5.VolunteerConnection.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

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
    @ManyToOne
    @JoinColumn(name = "account_id", insertable = false, updatable = false)
    private Account account;
    @Column(name = "account_id")
    private int accountId;
    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;
    @Column(name = "updatedAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate updatedAt;
    @Column(name = "isDeleted")
    private boolean isDeleted;
    @OneToMany(mappedBy = "parentComment", fetch = FetchType.LAZY)
    private List<PostComment> replies;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "comment_parent_id", insertable = false, updatable = false)
    private PostComment parentComment;

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
        this.createdAt = LocalDate.now();
        this.updatedAt = null;
    }

    public PostComment(int postId, String content, int accountId) {

        // if (comment_parentId == 0) {
        // this.comment_parentId = this.id;
        // }
        this.postId = postId;
        this.content = content;
        this.accountId = accountId;

        this.createdAt = LocalDate.now();
        this.updatedAt = null;
    }
}
