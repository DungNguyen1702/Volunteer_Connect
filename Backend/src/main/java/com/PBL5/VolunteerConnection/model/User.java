package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id")
    private int id;
    @Column(name = "account_id")
    private int accountId;
    @Column(name = "tel")
    private String tel;
    @Column(name = "address")
    private String address;
    @Column(name = "gender")
    private String gender;
    @Column(name = "birthday")
    private Date birthday;
    @Column(name = "email")
    private String email;

    public User(){

    }
    public User(int accountId, String tel, String gender, String address,  java.util.Date birthday, String email){
        this.accountId = accountId;
        this.tel = tel;
        this.address = address;
        this.gender = gender;
        this.birthday = birthday;
        this.email = email;
    }
}
