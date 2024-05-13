package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;


import java.sql.Date;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "Posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "activity_id")
    private int activityId;
    @Column(name = "title")
    private String title;
    @Column(name = "image")
    private String image;
    @Column(name = "content")
    private String content;
    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private java.util.Date createdAt;
    @Column(name = "updatedAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updateAt;
    public Post(int activityId, String title, String image, String content) {
        this.activityId = activityId;
        this.title = title;
        this.image = image;
        this.content = content;
        this.createdAt = Date.valueOf(LocalDate.now());
        this.updateAt = Date.valueOf(LocalDate.now());
    }

    public Post() {

    }
}
