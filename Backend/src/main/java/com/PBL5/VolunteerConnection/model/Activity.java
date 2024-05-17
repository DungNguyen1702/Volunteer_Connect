package com.PBL5.VolunteerConnection.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

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
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    protected LocalDate deadline;
    @Column(name = "date_start")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    protected LocalDate dateStart;
    @Column(name = "date_end")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    protected LocalDate dateEnd;
    @Column(name = "country")
    protected int country;
    @Column(name = "location")
    protected String location;
    @Column(name = "organization_id")
    protected int organizationId;
    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    protected LocalDate createdAt;
    @Column(name = "updateAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    protected LocalDate updateAt;
    @Column(name = "isDeleted")
    protected Boolean isDeleted;
    @Column(name = "content")
    protected String content;
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "organization_id", insertable = false, updatable = false)
    private Account account;

    public Activity(String image, String email, String name, int type, LocalDate deadline,
            LocalDate dateStart,
            LocalDate dateEnd,
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
        this.createdAt = LocalDate.now();
        this.updateAt = LocalDate.now();
    }

    public Activity() {

    }
}
