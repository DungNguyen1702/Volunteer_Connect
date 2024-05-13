package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.RegistrationForm;
import com.PBL5.VolunteerConnection.request.RegistrationFormRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.RegistrationFormService;

@RestController
@RequestMapping("api/v1/registrationform")
public class RegistrationFormController {
    @Autowired
    private RegistrationFormService registrationFormService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createRegistrationForm(@RequestHeader("Authorization") String token,
            @RequestBody RegistrationFormRequest registrationFormRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(registrationFormService.createRegistrationForm(token, registrationFormRequest));
    }

    @PostMapping("/aprove")
    ResponseEntity<Candidate> aproveRegistrationForm(@RequestHeader("Authorization") String token,
            @RequestBody RegistrationFormRequest registrationFormRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(registrationFormService.updateRegistrationForm(token, registrationFormRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<RegistrationForm>> selectAll() {
        return ResponseEntity.ok(registrationFormService.selectAll());
    }

    @GetMapping("/selectRegistrationFormActivityId")
    ResponseEntity<List<RegistrationForm>> getRegistrationFormActivityId(@RequestHeader("Authorization") String token,
            @RequestParam("id") int id) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(registrationFormService.selectAllByActivityId(token, id));
    }
}
