package com.PBL5.VolunteerConnection.model;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "taskcomments")
public class TaskComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "comment_parent_id")
    private Integer commentParentId;
    @Column(name = "content")
    private String content;
    @Column(name = "task_id")
    private int taskId;
    @Column(name = "account_id")
    private int accountId;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updatedAt")
    private Date updatedAt;
    @Column(name = "isDeleted")
    private boolean isDeleted;

    @ManyToOne
    @JoinColumn(name = "account_id", insertable = false, updatable = false)
    private Account account;

    @OneToMany(mappedBy = "parentComment", fetch = FetchType.LAZY)
    private List<TaskComment> replies;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "comment_parent_id", insertable = false, updatable = false)
    private TaskComment parentComment;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "task_id", insertable = false, updatable = false)
    private Task task;

    public TaskComment() {

    }

    public TaskComment(Integer commentParentId, String content, int taskId, int accountId, boolean isDeleted) {
        this.commentParentId = commentParentId;
        this.content = content;
        this.taskId = taskId;
        this.accountId = accountId;
        this.createdAt = Date.valueOf(LocalDate.now());
        this.updatedAt = Date.valueOf(LocalDate.now());
        this.isDeleted = isDeleted;
    }

}
