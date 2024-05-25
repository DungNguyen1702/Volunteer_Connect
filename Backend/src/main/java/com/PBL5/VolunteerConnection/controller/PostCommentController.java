package com.PBL5.VolunteerConnection.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.PBL5.VolunteerConnection.model.PostComment;
import com.PBL5.VolunteerConnection.request.PostCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.PostCommentService;

@RestController
@RequestMapping("api/v1/postcomment")
public class PostCommentController {
    @Autowired
    private PostCommentService postCommentService;

    @MessageMapping("/create")
    ResponseEntity<StatusResponse> createPostComment(@RequestHeader("Authorization") String token,
            @RequestBody PostCommentRequest postCommentRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postCommentService.createPostComment(token, postCommentRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updatePostComment(@RequestHeader("Authorization") String token,
            @RequestBody PostCommentRequest postCommentRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postCommentService.updatePostComment(token, postCommentRequest));
    }

    @PostMapping("/delete")
    ResponseEntity<StatusResponse> deletePostComment(@RequestHeader("Authorization") String token,
            @RequestBody PostCommentRequest postCommentRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postCommentService.deletePostComment(token, postCommentRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<PostComment>> selectAll() {
        return ResponseEntity.ok(postCommentService.selectAll());
    }
}
