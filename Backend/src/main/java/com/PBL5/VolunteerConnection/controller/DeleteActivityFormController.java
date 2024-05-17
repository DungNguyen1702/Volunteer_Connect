package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.DeleteActivityForm;
import com.PBL5.VolunteerConnection.request.DeleteActivityRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.DeleteActivityFormService;

@RestController
@RequestMapping("api/v1/deleteActivityForm")
public class DeleteActivityFormController {
    @Autowired
    private DeleteActivityFormService deleteActivityFormService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createDeleteForm(@RequestHeader("Authorization") String token,
            @RequestBody DeleteActivityRequest deleteActivityRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(deleteActivityFormService.createDeleteActivityForm(token, deleteActivityRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updateDeleteForm(@RequestHeader("Authorization") String token,
            @RequestBody DeleteActivityRequest deleteActivityRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(deleteActivityFormService.updateDeleteActivityForm(token, deleteActivityRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<DeleteActivityForm>> selectAll() {
        return ResponseEntity.ok(deleteActivityFormService.selectAll());
    }

    @GetMapping("/selectAllAprove")
    ResponseEntity<List<DeleteActivityForm>> selectAllAprove() {
        return ResponseEntity.ok(deleteActivityFormService.selectAllAprove());
    }
}
