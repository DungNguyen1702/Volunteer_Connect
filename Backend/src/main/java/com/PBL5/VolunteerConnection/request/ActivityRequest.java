package com.PBL5.VolunteerConnection.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ActivityRequest {
    private String token;
    private int id;
    private String image;
    private String email;
    private String name;
    private int type;
    private Date deadline;
    private Date dateStart;
    private Date dateEnd;
    private int country;
    private String location;
    private String content;
}
