package com.PBL5.VolunteerConnection.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.PBL5.VolunteerConnection.model.Task;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<Task, Integer> {
    List<Task> findByTableTaskId(int tableTaskId);

    Task findById(int id);
}
