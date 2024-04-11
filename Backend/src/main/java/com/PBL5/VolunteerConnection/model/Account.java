package com.PBL5.VolunteerConnection.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "accounts")
public class Account {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id")
    private int id;
    @Column(name = "account")
    private String account;
    @Column(name = "password")
    private String password;
    @Column(name = "name")
    private String name;
    @Column(name = "avatar")
    private String avatar;
    @Column(name = "status")
    private Boolean status;
    @Column(name = "role")
    private String role;
    @Column(name = "createdat")
    private Date createdAt;
    @Column(name = "updatedat")
    private Date updatedAt;
    @Column(name = "isdeleted")
    private Boolean isDeleted;
}
