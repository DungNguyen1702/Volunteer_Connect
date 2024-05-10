package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.sql.Date;

@Entity
@Data
@Table(name = "Candidates")
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "activity_id")
    private int activityId;
    @Column(name = "certificate")
    private String certificate;
    @Column(name = "date_earn_certificate")
    private Date dateCertificate;
    @Column(name = "createdAt")
    private Date createdAt;

    @OneToOne(mappedBy = "candidate", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private User user;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private Task taskc;

    public Candidate() {
    }

    public Candidate(int userId, int activityId, String certificate, Date dateCertificate) {
        this.userId = userId;
        this.activityId = activityId;
        this.certificate = certificate;
        this.dateCertificate = dateCertificate;
        this.createdAt = Date.valueOf(LocalDate.now());
    }

}
