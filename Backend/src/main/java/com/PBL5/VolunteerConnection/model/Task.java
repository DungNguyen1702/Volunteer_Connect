package com.PBL5.VolunteerConnection.model;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "Tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "date_start")
    private Date dateStart;
    @Column(name = "date_end")
    private Date dateEnd;
    @Column(name = "description")
    private String description;
    @Column(name = "title")
    private String title;
    @Column(name = "status")
    private int status;
    @Column(name = "table_task_id")
    private int tableTaskId;
    @Column(name = "candidate_id")
    private int candidateId;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updatedAt")
    private Date updatedAt;

    @OneToOne(mappedBy = "taskc", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Candidate candidate;

    @OneToMany(mappedBy = "task", fetch = FetchType.LAZY)
    private List<TaskComment> TaskComments;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "table_task_id", insertable = false, updatable = false)
    private TableTask tableTask;

    public Task() {

    }

    public Task(Date dateStart, Date dateEnd, String description, String title, int status, int tableTaskId,
            int candidateId) {
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.description = description;
        this.title = title;
        this.status = status;
        this.tableTaskId = tableTaskId;
        this.candidateId = candidateId;
        this.createdAt = Date.valueOf(LocalDate.now());
        this.updatedAt = Date.valueOf(LocalDate.now());
    }

}
