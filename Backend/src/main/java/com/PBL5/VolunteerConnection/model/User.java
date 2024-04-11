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
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "account_id")
    private int account_id;
    @Column(name = "tel")
    private String tel;
    @Column(name = "gender")
    private String gender;
    @Column(name = "birthday")
    private Date birthday;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "upDateAt")
    private Date upDateAt;
    @Column(name = "isDeleted")
    private Boolean isDeleted;
}
