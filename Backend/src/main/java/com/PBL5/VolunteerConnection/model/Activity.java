package com.PBL5.VolunteerConnection.model;

import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "Activities")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "image")
    private String image;
    @Column(name = "email")
    private String email;
    @Column(name = "name")
    private String name;
    @Column(name = "type")
    private int type;
    @Column(name = "deadline")
    private Date deadline;
    @Column(name = "date_start")
    private Date dateStart;
    @Column(name = "date_end")
    private Date dateEnd;
    @Column(name = "country")
    private int country;
    @Column(name = "location")
    private String location;
    @Column(name = "organization_id")
    private int organizationId;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updateAt")
    private Date updateAt;
    @Column(name = "isDeleted")
    private int isDeleted;
    @Column(name = "content")
    private String content;

    public Activity(String image, String email, String name, int type, Date deadline, Date dateStart, Date dateEnd,
            int country, String location, int organizationId, int isDeleted,
            String content) {
        this.image = image;
        this.email = email;
        this.name = name;
        this.type = type;
        this.deadline = deadline;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.country = country;
        this.location = location;
        this.organizationId = organizationId;
        this.isDeleted = isDeleted;
        this.content = content;
        this.createdAt = Date.valueOf(LocalDate.now());
        this.updateAt = Date.valueOf(LocalDate.now());
    }

    public Activity() {

    }
}
