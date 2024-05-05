package com.PBL5.VolunteerConnection.service;

import java.util.List;

import com.PBL5.VolunteerConnection.model.PostComment;
import com.PBL5.VolunteerConnection.response.PostCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface PostCommentService {

    StatusResponse createPostComment(String token, PostCommentRequest postComment);

    StatusResponse updatePostComment(String token, PostCommentRequest postComment);

    StatusResponse deletePostComment(String token, PostCommentRequest postComment);

    List<PostComment> selectAll();
}
