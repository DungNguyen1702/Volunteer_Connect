package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Post;
import com.PBL5.VolunteerConnection.response.StatusResponse;

public interface PostService {
    StatusResponse createPost(Post post);
    StatusResponse updatePost(Post post);
    StatusResponse deletePost(int post);
}
