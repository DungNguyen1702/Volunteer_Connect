package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Post;
import com.PBL5.VolunteerConnection.response.PostRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

import java.util.List;

public interface PostService {
    StatusResponse createPost(PostRequest post);

    StatusResponse updatePost(PostRequest post);

    StatusResponse deletePost(PostRequest post);

    List<Post> SelectAllPost(PostRequest post);

    List<Post> SelectAll();
}
