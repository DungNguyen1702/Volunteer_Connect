package com.PBL5.VolunteerConnection.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.PostComment;
import com.PBL5.VolunteerConnection.repository.PostCommentRepository;
import com.PBL5.VolunteerConnection.response.PostCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class PostCommentServiceImpl implements PostCommentService {
    @Autowired
    private PostCommentRepository postCommentRepository;

    @Override
    public StatusResponse createPost(String token, PostCommentRequest postComment) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'createPost'");
    }

    @Override
    public StatusResponse updpostComment(String token, PostCommentRequest postComment) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'updpostComment'");
    }

    @Override
    public StatusResponse deletePost(String token, PostCommentRequest postComment) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'deletePost'");
    }

    @Override
    public List<PostComment> selectAll() {
        // TODO Auto-generated method stub
        try {
            List<PostComment> listComments = postCommentRepository.findAll();
            return listComments;
        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }

}
