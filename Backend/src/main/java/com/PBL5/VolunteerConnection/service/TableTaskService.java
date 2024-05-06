package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.TableTask;
import com.PBL5.VolunteerConnection.request.TableTaskRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface TableTaskService {
    StatusResponse createTableTask(String token, TableTaskRequest tableTask);

    StatusResponse updateTableTask(String token, TableTaskRequest tableTask);

    StatusResponse deleteTableTask(String token, TableTaskRequest tableTask);

    List<TableTask> selectAll();

    List<TableTask> selectAllOwner(String activityId);
}
