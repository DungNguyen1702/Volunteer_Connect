package com.PBL5.VolunteerConnection.model;

import lombok.Data;
import java.time.LocalDate;

import jakarta.persistence.*;

@Entity
@Data
@Table(name = "Notifications")
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "title")
    private String title;
    @Column(name = "status")
    private int status;
    @Column(name = "account_id")
    private int accountId;
    @Column(name = "content")
    private String content;
    @Column(name = "createdAt")
    private LocalDate createdAt;
    @Column(name = "image")
    private String image;
    @Column(name = "type")
    private int type;
    @Column(name = "idTO")
    private int idTO;

    public Notification(String title, int accountId, String content, String image) {
        this.title = title;
        this.accountId = accountId;
        this.content = content;
        this.image = image;
        this.createdAt = LocalDate.now();
        this.status = 0;
        this.type = 0;
        this.idTO = 0;
    }

    public Notification() {

    }
}
