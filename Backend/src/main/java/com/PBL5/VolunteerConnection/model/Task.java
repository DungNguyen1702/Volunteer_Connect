package com.PBL5.VolunteerConnection.model;

// import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateStart;
    @Column(name = "date_end")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dateEnd;
    @Column(name = "description")
    private String description;
    @Column(name = "title")
    private String title;
    @Column(name = "status")
    private int status;
    @Column(name = "table_task_id")
    private int tableTaskId;
    @Column(name = "candidate_id", insertable = false, updatable = false)
    private Integer candidateId;
    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate createdAt;
    @Column(name = "updatedAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate updatedAt;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "candidate_id", referencedColumnName = "id")
    // @JsonIgnore
    private Candidate candidate;

    @OneToMany(mappedBy = "task", fetch = FetchType.LAZY)
    private List<TaskComment> TaskComments;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "table_task_id", insertable = false, updatable = false)
    private TableTask tableTask;

    public Task() {

    }

    public Task(LocalDate dateStart, LocalDate dateEnd, String description, String title, int status, int tableTaskId,
            Integer candidateId) {
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;

        this.description = description;
        this.title = title;
        this.status = status;
        this.tableTaskId = tableTaskId;
        this.candidateId = candidateId;
        this.createdAt = LocalDate.now();
        this.updatedAt = LocalDate.now();
    }

}
