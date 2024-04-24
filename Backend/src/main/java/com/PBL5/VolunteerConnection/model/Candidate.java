package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

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
    @Column(name = "date_ear_certificate")
    private Date dateCertificate;
    @Column(name = "createdAt")
    private Date createdAt;
}
