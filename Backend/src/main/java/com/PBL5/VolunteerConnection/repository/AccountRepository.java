package com.PBL5.VolunteerConnection.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.Account;
import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Account, Integer>{
    List<Account> findByAccount(String account);
}
