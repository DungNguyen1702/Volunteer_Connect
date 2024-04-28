// package com.PBL5.VolunteerConnection.controller;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.PBL5.VolunteerConnection.response.CandidateRequest;
// import com.PBL5.VolunteerConnection.response.StatusResponse;
// import com.PBL5.VolunteerConnection.service.CandidateService;

// @RestController
// @RequestMapping("api/v1/candidate")
// public class CandidateController {
// @Autowired
// private CandidateService CandidateService;

// @PostMapping("/create")
// ResponseEntity<StatusResponse> createCandidate(@RequestBody CandidateRequest
// CandidateRequest) {
// return ResponseEntity.ok(CandidateService.createCandidate(CandidateRequest));
// }

// @PostMapping("/update")
// ResponseEntity<StatusResponse> updateCandidate(@RequestBody CandidateRequest
// CandidateRequest) {
// return ResponseEntity.ok(CandidateService.updateCandidate(CandidateRequest));
// }

// @DeleteMapping("/delete")
// ResponseEntity<StatusResponse> deleteCandidate(@RequestBody CandidateRequest
// CandidateRequest) {
// return ResponseEntity.ok(CandidateService.deleteCandidate(CandidateRequest));
// }

// @GetMapping("/selectAll")
// ResponseEntity<StatusResponse> selectAllCandidate(@RequestBody
// CandidateRequest CandidateRequest) {
// return
// ResponseEntity.ok(CandidateService.SelectAllCandidate(CandidateRequest));
// }
// }
