package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Data
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "account_id", insertable = false, updatable = false)
    private int accountId;
    @Column(name = "tel")
    private String tel;
    @Column(name = "address")
    private String address;
    @Column(name = "gender")
    private String gender;
    @Column(name = "birthday")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date birthday;
    // @JsonIgnore
    // @OneToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "account_id", referencedColumnName = "id")
    // private Account account;
    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Account account;

    @JsonIgnore
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    private List<Candidate> candidates;

    public User() {

    }

    public User(int accountId, String tel, String gender, String address, Date birthday) {
        this.accountId = accountId;
        this.tel = tel;
        this.address = address;
        this.gender = gender;
        this.birthday = birthday;
    }
}
