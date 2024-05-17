package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.DeleteActivityForm;
import com.PBL5.VolunteerConnection.request.DeleteActivityRequest;
import com.PBL5.VolunteerConnection.response.DeleteFormResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface DeleteActivityFormService {
    StatusResponse createDeleteActivityForm(String token, DeleteActivityRequest deleteActivityForm);

    StatusResponse updateDeleteActivityForm(String token, DeleteActivityRequest deleteActivityForm);

    StatusResponse deleteDeleteActivityForm(String token, DeleteActivityRequest deleteActivityForm);

    List<DeleteFormResponse> selectAll();

    List<DeleteActivityForm> selectAllAprove();
}
