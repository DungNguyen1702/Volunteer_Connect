package com.PBL5.VolunteerConnection.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.PBL5.VolunteerConnection.model.TableTask;
import java.util.List;

@Repository
public interface TableTaskRepository extends JpaRepository<TableTask, Integer> {
    List<TableTask> findByActivityId(int activityId);

    TableTask findById(int id);

}
