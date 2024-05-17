package com.PBL5.VolunteerConnection.controller;

import com.PBL5.VolunteerConnection.request.PostRequest;
import com.PBL5.VolunteerConnection.response.PostDetailResponse;
import com.PBL5.VolunteerConnection.response.PostsActivitiesResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import com.PBL5.VolunteerConnection.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/post")
public class PostController {
    @Autowired
    private PostService postService;

    @PostMapping("/create")
    ResponseEntity<StatusResponse> createPost(@RequestHeader("Authorization") String token,
            @RequestBody PostRequest postRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postService.createPost(token, postRequest));
    }

    @PostMapping("/update")
    ResponseEntity<StatusResponse> updatePost(@RequestHeader("Authorization") String token,
            @RequestBody PostRequest postRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postService.updatePost(token, postRequest));
    }

    @PostMapping("/delete")
    ResponseEntity<StatusResponse> deletePost(@RequestHeader("Authorization") String token,
            @RequestBody PostRequest postRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postService.deletePost(token, postRequest));
    }

    @GetMapping("/selectAll")
    ResponseEntity<List<PostsActivitiesResponse>> selectAll(@RequestHeader("Authorization") String token) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postService.selectAllByAccountId(token));
    }

    @GetMapping("/selectAllLikePost")
    ResponseEntity<List<PostsActivitiesResponse>> selectAllLikePost(@RequestHeader("Authorization") String token) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postService.selectAllLikePostByAccountID(token));
    }

    @PostMapping("/likePost")
    ResponseEntity<StatusResponse> createLikePost(@RequestHeader("Authorization") String token,
            @RequestBody PostRequest postRequest) {
        token = token.substring("Bearer ".length());
        return ResponseEntity.ok(postService.createLikePost(token, postRequest));
    }

    @GetMapping("/postDetail")
    ResponseEntity<PostDetailResponse> getPostDetail(@RequestParam("id") int id) {
        return ResponseEntity.ok(postService.getPostDetail(id));
    }

}
