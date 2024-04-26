package com.PBL5.VolunteerConnection.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UpdateAccountRequest {
    private String token;
    private String name;
    private String tel;
    private String gender;
    private String address;
    private Date birthday;
    private String avatar;
}
