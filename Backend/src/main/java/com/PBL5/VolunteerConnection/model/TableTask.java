package com.PBL5.VolunteerConnection.model;

import lombok.Data;
import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.*;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Data
@Table(name = "TableTasks")
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
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;
    @Column(name = "updatedAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate updatedAt;
    @OneToMany(mappedBy = "tableTask", fetch = FetchType.LAZY)
    private List<Task> Tasks;

    public TableTask() {

    }

    public TableTask(int activityId, String name, String color) {
        this.activityId = activityId;
        this.name = name;
        this.color = color;
        this.createdAt = LocalDate.now();
        this.updatedAt = LocalDate.now();
    }

}
