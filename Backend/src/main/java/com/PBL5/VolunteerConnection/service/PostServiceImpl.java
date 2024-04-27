package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Post;
import com.PBL5.VolunteerConnection.repository.PostRespository;
import com.PBL5.VolunteerConnection.response.PostRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;

@Service
public class PostServiceImpl implements PostService{
    @Autowired
    private PostRespository postRespository;
    @Override
    public StatusResponse createPost(PostRequest postRequest) {
        try{

            Post createPost = new Post(postRequest.getActivityId(), postRequest.getTitle(), postRequest.getImage(), postRequest.getContent());
            postRespository.save(createPost);
            return  StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.CREATED).body("Post " + createPost.getTitle()+"has been created sucessfully!!"))
                    .build();
        }catch (Exception e){
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e ))
                    .build();
        }
    }

    @Override
    public StatusResponse updatePost(PostRequest postRequest) {
        try{
            Post updatePost = postRespository.findById(postRequest.getId());
            updatePost.setContent(postRequest.getContent());
            updatePost.setTitle(postRequest.getTitle());
            updatePost.setImage(postRequest.getImage());
            updatePost.setUpdateAt(Date.valueOf(LocalDate.now()));
            postRespository.save(updatePost);
            return  StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Post " + updatePost.getTitle()+"has been updated sucessfully!!"))
                    .build();
        }catch (Exception e){
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e ))
                    .build();
        }
    }
    @Override
    public StatusResponse deletePost(PostRequest postRequest) {
        try{
            postRespository.deleteById(postRequest.getId());
            return  StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Post has been deleted sucessfully!!"))
                    .build();
        }catch (Exception e){
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e ))
                    .build();
        }

    }
}
