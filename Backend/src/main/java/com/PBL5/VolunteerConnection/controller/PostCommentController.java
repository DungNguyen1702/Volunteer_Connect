package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.PostComment;
import com.PBL5.VolunteerConnection.service.PostCommentService;

@RestController
@RequestMapping("api/v1/postcomment")
public class PostCommentController {
    @Autowired
    private PostCommentService postCommentService;

    @GetMapping("/selectAll")
    ResponseEntity<List<PostComment>> selectAll() {
        return ResponseEntity.ok(postCommentService.selectAll());
    }
}
