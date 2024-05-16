package com.PBL5.VolunteerConnection.model;

import lombok.Data;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "DeleteActivityForms")
public class DeleteActivityForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "activity_id")
    private int activity_id;
    @Column(name = "reason")
    private String reason;
    @Column(name = "isAccept")
    private int isAccept;
    @Column(name = "createdAt")
    private LocalDate createdAt;

    public DeleteActivityForm() {

    }

    public DeleteActivityForm(int activity_id, String reason) {
        this.activity_id = activity_id;
        this.reason = reason;
        this.createdAt = LocalDate.now();
        this.isAccept = 0;
    }

}
