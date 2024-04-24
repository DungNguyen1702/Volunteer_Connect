package com.PBL5.VolunteerConnection.model;

import jakarta.persistence.*;
import lombok.Data;


import java.util.Date;


@Data
@Table(name = "Activities")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "image")
    private String image;
    @Column(name = "name")
    private String name;
    @Column(name = "type")
    private int type;
    @Column(name = "deadline")
    private Date deadline;
    @Column(name = "date_start")
    private Date dateStart;
    @Column(name = "date_end")
    private Date dateEnd;
    @Column(name = "country")
    private int country;
    @Column(name = "location")
    private String location;
    @Column(name = "organization_id")
    private int organizationId;
    @Column(name = "createdAt")
    private Date createdAt;
    @Column(name = "updatedAt")
    private Date updateAt;
    @Column(name = "isDeleted")
    private int isDeleted;
    @Column(name = "content")
    private String content;


}
