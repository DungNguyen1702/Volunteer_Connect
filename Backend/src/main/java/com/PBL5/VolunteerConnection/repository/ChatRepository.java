package com.PBL5.VolunteerConnection.repository;

import com.PBL5.VolunteerConnection.dto.ChatBoxDTO;
import com.PBL5.VolunteerConnection.model.Chat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer> {
    @Query(value = "SELECT new com.PBL5.VolunteerConnection.dto.ChatBoxDTO(sa, ra, c) " +
            "FROM Chat c " +
            "JOIN Account sa ON sa.id = c.senderId " +
            "JOIN Account ra ON ra.id = c.receiverId " +
            "WHERE sa.id = :accountId OR ra.id = :accountId")
    List<ChatBoxDTO> findAllByAccountId(@Param("accountId") int accountId);

}
