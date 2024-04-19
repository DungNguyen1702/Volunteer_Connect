package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Data
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name= "id")
    private int id;
    @Column(name = "account_id")
    private int account_id;
    @Column(name = "tel")
    private String tel;
    @Column(name = "address")
    private String address;
    @Column(name = "gender")
    private String gender;
    @Column(name = "birthday")
    private Date birthday;
    public User(){

    }
    public User(int account_id, String tel, String gender, String address,  java.util.Date birthday){
        this.account_id = account_id;
        this.tel = tel;
        this.address = address;
        this.gender = gender;
        this.birthday = birthday;
    }
}
