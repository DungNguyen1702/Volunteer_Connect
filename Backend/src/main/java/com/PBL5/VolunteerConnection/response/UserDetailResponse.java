package com.PBL5.VolunteerConnection.response;

import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserDetailResponse {
    private int id;
    private AccountResponse account;
    private String tel;
    private String address;
    private String gender;
    private String birthday;
    private Boolean isDeleted;
    public UserDetailResponse(User user, Account account){
        this.account = new AccountResponse(account);
        this.id = user.getId();
        this.tel = user.getTel();;
        this.address = user.getAddress();
        this.gender = user.getGender();
        this.birthday = null;
        if(user.getBirthday() != null){
            this.birthday = user.getBirthday().toString();
        }
    }
}
