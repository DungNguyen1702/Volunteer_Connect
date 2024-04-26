package com.PBL5.VolunteerConnection.model;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collection;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

@Entity
@Data
@Table(name = "Accounts")
public class Account implements UserDetails {
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
    private int role;
    @Column(name = "createdat")
    private Date createdAt;
    @Column(name = "updatedat")
    private Date updatedAt;
    @Column(name = "isDeleted")
    private Boolean isDeleted;
    @Column(name = "isValid")
    private Boolean isValid;
    public Account(String account, String password, String name, int role)  {
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

    }

    public Account() {

    }


    @Override
    public Collection<SimpleGrantedAuthority>getAuthorities() {
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
        if (this.isValid){
            return true;
        }
        return false;
    }
}
