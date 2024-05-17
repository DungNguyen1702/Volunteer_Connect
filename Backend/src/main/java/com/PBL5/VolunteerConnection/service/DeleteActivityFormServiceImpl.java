package com.PBL5.VolunteerConnection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.DeleteActivityForm;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.DeleteActivityFormRepository;
import com.PBL5.VolunteerConnection.request.DeleteActivityRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class DeleteActivityFormServiceImpl implements DeleteActivityFormService {

    @Autowired
    private DeleteActivityFormRepository deleteActivityFormRepository;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private JwtService jwtService;

    @Override
    public StatusResponse createDeleteActivityForm(String token, DeleteActivityRequest deleteActivityForm) {
        // TODO Auto-generated method stub
        try {
            Activity activity = activityRepository.findById(deleteActivityForm.getActivityId());
            int organizationId = activity.getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
                DeleteActivityForm createForm = new DeleteActivityForm(deleteActivityForm.getActivityId(),
                        deleteActivityForm.getReason());
                createForm.setActivity(activity);
                deleteActivityFormRepository.save(createForm);
                System.out.println(createForm.getActivity().getId());
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("Delete form has been created sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Delete form cant not be created because you are not owner!!"))
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
    public StatusResponse deleteDeleteActivityForm(String token, DeleteActivityRequest deleteActivityForm) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<DeleteActivityForm> selectAll() {
        // TODO Auto-generated method stub
        return deleteActivityFormRepository.findAll();
    }

    @Override
    public StatusResponse updateDeleteActivityForm(String token, DeleteActivityRequest deleteActivityForm) {
        // TODO Auto-generated method stub
        try {
            DeleteActivityForm updateDeleteForm = deleteActivityFormRepository.findById(deleteActivityForm.getId());
            updateDeleteForm.setIsAccept(deleteActivityForm.getIsAccept());
            deleteActivityFormRepository.save(updateDeleteForm);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                            .body("Delete form has been aproved sucessfully !!"))
                    .build();
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public List<DeleteActivityForm> selectAllAprove() {
        // TODO Auto-generated method stub
        return deleteActivityFormRepository.findByIsAccept(0);
    }

}
