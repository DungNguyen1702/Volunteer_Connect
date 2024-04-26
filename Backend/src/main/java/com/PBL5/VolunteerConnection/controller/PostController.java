package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.model.Post;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/v1/post")
public class PostController {
    @Autowired
    private PostService postService;
    @PostMapping("/create")
    ResponseEntity<StatusResponse> createPost(@RequestBody Post post){
        return ResponseEntity.ok(postService.createPost(post));
    }
    @PostMapping("/update")
    ResponseEntity<StatusResponse> updatePost(@RequestBody Post post){
        return ResponseEntity.ok(postService.updatePost(post));
    }
    @DeleteMapping("/delete")
    ResponseEntity<StatusResponse> deletePost(@RequestParam int id){
        return ResponseEntity.ok(postService.deletePost(id));
    }
}
