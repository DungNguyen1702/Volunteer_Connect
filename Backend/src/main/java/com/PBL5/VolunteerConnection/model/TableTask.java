package com.PBL5.VolunteerConnection.model;

import lombok.Data;
import java.sql.Date;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "tabletasks")
public class TableTask {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "activity_id")
    private int activityId;
    @Column(name = "name")
    private String name;
    @Column(name = "color")
    private String color;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updatedAt")
    private Date updatedAt;

    public TableTask() {

    }

    public TableTask(int activityId, String name, String color) {
        this.activityId = activityId;
        this.name = name;
        this.color = color;
        this.createdAt = Date.valueOf(LocalDate.now());
        this.updatedAt = Date.valueOf(LocalDate.now());
    }

}
