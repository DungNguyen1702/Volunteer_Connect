package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.dto.PostDetailDTO;
import com.PBL5.VolunteerConnection.model.LikePost;
import com.PBL5.VolunteerConnection.model.Post;
import com.PBL5.VolunteerConnection.request.PostRequest;
import com.PBL5.VolunteerConnection.response.PostsActivitiesResponse;
import com.PBL5.VolunteerConnection.response.StatusResponse;

import java.util.List;

public interface PostService {
    StatusResponse createPost(String token, PostRequest post);

    StatusResponse updatePost(String token, PostRequest post);

    StatusResponse deletePost(String token,PostRequest post);

    List<Post> SelectAllPost(PostRequest post);

    List<Post> SelectAll();
    List<PostsActivitiesResponse> selectAll();
    StatusResponse createLikePost(String token, PostRequest post);
    StatusResponse deleteLikePost(String token, PostRequest post);
    List<LikePost> getAllLikePost(String token);

}
