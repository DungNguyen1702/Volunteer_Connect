package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.PostComment;
import com.PBL5.VolunteerConnection.response.PostCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface PostCommentService {

    StatusResponse createPost(String token, PostCommentRequest postComment);

    StatusResponse updpostComment(String token, PostCommentRequest postComment);

    StatusResponse deletePost(String token, PostCommentRequest postComment);

    List<PostComment> selectAll();
}
