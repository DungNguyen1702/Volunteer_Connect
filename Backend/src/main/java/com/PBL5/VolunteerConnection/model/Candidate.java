package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.format.annotation.DateTimeFormat;

import java.sql.Date;

@Entity
@Data
@Table(name = "Candidates")
@AllArgsConstructor
public class Candidate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "user_id", insertable = false, updatable = false)
    private int userId;
    @Column(name = "activity_id")
    private int activityId;
    @Column(name = "certificate")
    private String certificate;
    @Column(name = "date_earn_certificate")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateCertificate;
    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    // @JsonIgnore
    private User user;

    public Candidate() {
    }

    public Candidate(int userId, int activityId, String certificate, LocalDate dateCertificate) {
        this.userId = userId;
        this.activityId = activityId;
        this.certificate = certificate;
        this.dateCertificate = dateCertificate;
        this.createdAt = LocalDate.now();
    }

}
