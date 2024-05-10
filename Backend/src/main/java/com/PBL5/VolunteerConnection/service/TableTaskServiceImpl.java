package com.PBL5.VolunteerConnection.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.TableTask;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.CandidateRepository;
import com.PBL5.VolunteerConnection.repository.TableTaskRepository;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.request.TableTaskRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class TableTaskServiceImpl implements TableTaskService {
    @Autowired
    private TableTaskRepository tableTaskRepository;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private CandidateRepository candidateRepository;
    @Autowired
    UserRespository userRespository;

    @Override
    public StatusResponse createTableTask(String token, TableTaskRequest tableTask) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(tableTask.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
                TableTask createTableTask = new TableTask(tableTask.getActivityId(), tableTask.getName(),
                        tableTask.getColor());
                tableTaskRepository.save(createTableTask);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("TableTask " + createTableTask.getName() + "has been created sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("TableTask cant not be created because you are not owner!!"))
                        .build();
            }
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse updateTableTask(String token, TableTaskRequest tableTask) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(tableTask.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
                TableTask updateTableTask = tableTaskRepository.findById(tableTask.getId());
                updateTableTask.setColor(tableTask.getColor());
                updateTableTask.setName(tableTask.getName());
                updateTableTask.setUpdatedAt(Date.valueOf(LocalDate.now()));
                // TODO: handle exception
                tableTaskRepository.save(updateTableTask);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("TableTask has been updated sucessfully !!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("TableTask cant not be updated because you are not owner!!"))
                        .build();
            }
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse deleteTableTask(String token, TableTaskRequest tableTask) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(tableTask.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
                tableTaskRepository.deleteById(tableTask.getId());
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("TableTask has been deleted sucessfully !!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("TableTask cant not be deleted because you are not owner!!"))
                        .build();
            }
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public List<TableTask> selectAll() {
        // TODO Auto-generated method stub
        try {
            List<TableTask> listComments = tableTaskRepository.findAll();
            return listComments;
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println(e.getMessage());
            return null;
        }
    }

    @Override
    public List<TableTask> selectAllByActivityId(String token, int activityId) {
        // TODO Auto-generated method stub
        return null;

    }

}
