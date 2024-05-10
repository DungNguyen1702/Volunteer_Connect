package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.Task;
import com.PBL5.VolunteerConnection.request.TaskRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface TaskService {
    StatusResponse createTask(String token, TaskRequest task);

    StatusResponse updateTask(String token, TaskRequest task);

    StatusResponse deleteTask(String token, TaskRequest task);

    List<Task> selectAll();

}
