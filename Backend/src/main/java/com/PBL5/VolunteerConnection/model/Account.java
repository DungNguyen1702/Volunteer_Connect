package com.PBL5.VolunteerConnection.model;

import java.sql.Date;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Data
@Table(name = "Accounts")
public class Account implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", insertable = false, updatable = false)
    private int id;
    @Column(name = "account")
    private String account;
    @JsonIgnore
    @Column(name = "password")
    private String password;
    @Column(name = "name")
    private String name;
    @Column(name = "avatar")
    private String avatar;
    @Column(name = "status")
    private Boolean status;
    @Column(name = "role")
    private int role;
    @Column(name = "createdAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date createdAt;
    @Column(name = "updatedAt")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private Date updatedAt;
    @Column(name = "isDeleted")
    private Boolean isDeleted;
    @Column(name = "isValid")
    private Boolean isValid;
    @Column(name = "backgroundNoAva")
    private String backgroundNoAva;
    @JsonIgnore
    @OneToMany(mappedBy = "account")
    private List<PostComment> comments;
    @JsonIgnore
    @OneToMany(mappedBy = "account")
    private List<Activity> activities;
    // @JsonIgnore
    // @OneToOne(fetch = FetchType.EAGER)
    // @JoinColumn(name = "id", referencedColumnName = "account_id")
    // private User user;
    // @OneToOne(fetch = FetchType.LAZY)
    // @JsonIgnore
    // @JoinColumn(name = "id", referencedColumnName = "account_id")
    // private User user;

    @JsonIgnore
    @OneToOne(mappedBy = "account", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private User user;

    public Account(String account, String password, String name, int role) {
        this.account = account;
        this.password = password;
        this.name = name;
        this.avatar = null;
        this.status = null;
        this.role = role;
        this.createdAt = Date.valueOf(LocalDate.now());
        this.updatedAt = Date.valueOf(LocalDate.now());
        this.isDeleted = false;
        this.isValid = true;
        this.backgroundNoAva = "#9b59b6";
    }

    public Account() {

    }

    @Override
    public Collection<SimpleGrantedAuthority> getAuthorities() {
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(String.valueOf(role)));
        return authorities;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.account;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        if (this.isValid) {
            return true;
        }
        return false;
    }
}
