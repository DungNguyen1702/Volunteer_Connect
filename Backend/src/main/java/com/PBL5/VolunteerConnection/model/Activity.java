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
    protected int id;
    @Column(name = "image")
    protected String image;
    @Column(name = "email")
    protected String email;
    @Column(name = "name")
    protected String name;
    @Column(name = "type")
    protected int type;
    @Column(name = "deadline")
    protected Date deadline;
    @Column(name = "date_start")
    protected Date dateStart;
    @Column(name = "date_end")
    protected Date dateEnd;
    @Column(name = "country")
    protected int country;
    @Column(name = "location")
    protected String location;
    @Column(name = "organization_id")
    protected int organizationId;
    @Column(name = "createdAt")
    protected Date createdAt;
    @Column(name = "updateAt")
    protected Date updateAt;
    @Column(name = "isDeleted")
    protected Boolean isDeleted;
    @Column(name = "content")
    protected String content;

    public Activity(String image, String email, String name, int type, Date deadline, Date dateStart, Date dateEnd,
            int country, String location, int organizationId, String content) {
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
        this.isDeleted = false;
        this.content = content;
        this.createdAt = Date.valueOf(LocalDate.now());
        this.updateAt = Date.valueOf(LocalDate.now());
    }

    public Activity() {

    }
}
