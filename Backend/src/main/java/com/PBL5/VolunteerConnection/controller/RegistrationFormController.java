package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.RegistrationForm;
import com.PBL5.VolunteerConnection.service.RegistrationFormService;

@RestController
@RequestMapping("api/v1/registrationform")
public class RegistrationFormController {
    @Autowired
    private RegistrationFormService registrationFormService;

    @GetMapping("/selectAll")
    ResponseEntity<List<RegistrationForm>> selectAll() {
        return ResponseEntity.ok(registrationFormService.selectAll());
    }
}
