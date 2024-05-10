package com.PBL5.VolunteerConnection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Task;
import com.PBL5.VolunteerConnection.repository.TaskRepository;
import com.PBL5.VolunteerConnection.request.TaskRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;

    @Override
    public StatusResponse createTask(String token, TaskRequest task) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public StatusResponse deleteTask(String token, TaskRequest task) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public StatusResponse updateTask(String token, TaskRequest task) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Task> selectAll() {
        // TODO Auto-generated method stub
        try {
            List<Task> listTask = taskRepository.findAll();
            return listTask;
        } catch (Exception e) {
            // TODO: handle exceptionr
            System.out.println(e.getMessage());
            return null;
        }
    }
}
