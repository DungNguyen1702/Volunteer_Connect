package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

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
    private int isConfirmed;
    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;

    public RegistrationForm() {

    }

    public RegistrationForm(int userId, int activityId) {
        this.userId = userId;
        this.activityId = activityId;
        this.isConfirmed = 0;
        this.createdAt = LocalDate.now();
    }

}
