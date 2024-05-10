package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;

@Entity
@Data
@Table(name = "RegistrationForms")
public class RegistrationForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "activity_id")
    private int activityId;
    @Column(name = "isConfirmed")
    private Boolean isConfirmed;
    @Column(name = "createdAt")
    private Date createdAt;
}
