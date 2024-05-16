package com.PBL5.VolunteerConnection.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.Task;
import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.CandidateRepository;
import com.PBL5.VolunteerConnection.repository.TaskRepository;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.request.TaskRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class TaskServiceImpl implements TaskService {

    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private CandidateRepository candidateRepository;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRespository userRespository;

    @Override
    public String createTask(String token, TaskRequest task) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(task.getActivityId()).getOrganizationId();
            int account_id = jwtService.getId(token);
            if (account_id == organizationId) {
                Task createdTask = new Task(task.getDateStart(), task.getDateEnd(), task.getDescription(),
                        task.getTitle(), task.getStatus(), task.getTableTaskId(), task.getCandidateId());
                if (task.getCandidateId() != null) {
                    Candidate candidate1 = candidateRepository.findById((int) task.getCandidateId());
                    createdTask.setCandidate(candidate1);
                }
                taskRepository.save(createdTask);
                return task.getDescription();
            } else {
                return "you are not onwer of this activity";
            }
        } catch (Exception e) {
            // TODO: handle exception
            return e.getMessage();
        }
    }

    @Override
    public StatusResponse deleteTask(String token, TaskRequest task) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(task.getActivityId()).getOrganizationId();
            int account_id = jwtService.getId(token);
            if (account_id == organizationId) {
                taskRepository.deleteById(task.getId());
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Task has been deleted sucessfully !!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Task cant not be deleted because you are not owner!!"))
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
    public StatusResponse updateTask(String token, TaskRequest task) {
        // TODO Auto-generated method stub
        try {
            int organizationId = activityRepository.findById(task.getActivityId()).getOrganizationId();
            int account_id = jwtService.getId(token);
            Candidate candidateTemp = null;
            boolean check = false;
            if (organizationId != account_id) {

                User user = userRespository.findById(account_id);
                List<Candidate> listCandidates = user.getCandidates();
                for (Candidate candidate : listCandidates) {
                    if (candidate.getUserId() == user.getId()) {
                        check = true;

                        break;
                    }
                }
            }
            if (task.getCandidateId() != null) {
                candidateTemp = candidateRepository.findById((int) task.getCandidateId());
            }
            if (check == true || account_id == organizationId) {
                Task updateTask = taskRepository.findById(task.getId());
                updateTask.setCandidateId(task.getCandidateId());
                updateTask.setStatus(task.getStatus());
                System.out.println("oke");
                updateTask.setDateEnd(task.getDateEnd());
                updateTask.setDateStart(task.getDateStart());
                updateTask.setDescription(task.getDescription());
                updateTask.setUpdatedAt(LocalDate.now());
                updateTask.setTitle(task.getTitle());
                updateTask.setCandidate(candidateTemp);
                System.out.println(updateTask.getCandidate().getId());
                taskRepository.save(updateTask);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Task has been updated sucessfully !!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Task cant not be updated because you are not owner!!"))
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
    public List<Task> selectAll() {
        // TODO Auto-generated method stub
        try {
            List<Task> listTask = taskRepository.findAll();
            for (Task task : listTask) {
                int candidateId = task.getCandidateId();
                if (candidateId != 0) {
                    Candidate candidate = candidateRepository.findById(candidateId);
                    System.out.println(candidate.getActivityId());
                    System.out.println(task.getCandidate().getActivityId());
                    System.out.println(task.getCandidate().getUser().getAccount().getId());
                    System.out.println(task.getCandidate().getUser().getAccountId());
                }
            }
            // return null;
            return listTask;
        } catch (Exception e) {
            // TODO: handle exceptionr
            System.out.println(e.getMessage());
            return null;
        }
    }
}
