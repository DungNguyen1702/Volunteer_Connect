package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.model.Post;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.PostRespository;
import com.PBL5.VolunteerConnection.response.PostRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostRespository postRespository;
    @Autowired
    private ActivityService activityService;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private JwtService jwtService;

    @Override
    public StatusResponse createPost(String token, PostRequest postRequest) {
        try {

            int organizationId = activityRepository.findById(postRequest.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
                Post createPost = new Post(postRequest.getActivityId(), postRequest.getTitle(), postRequest.getImage(),
                        postRequest.getContent());
                postRespository.save(createPost);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("Post " + createPost.getTitle() + "has been created sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Post cant not be updated because you are not owner!!"))
                        .build();
            }

        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse updatePost(String token, PostRequest postRequest) {
        try {

            int organizationId = activityRepository.findById(postRequest.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
                Post updatePost = postRespository.findById(postRequest.getId());
                updatePost.setContent(postRequest.getContent());
                updatePost.setTitle(postRequest.getTitle());
                updatePost.setImage(postRequest.getImage());
                updatePost.setUpdateAt(Date.valueOf(LocalDate.now()));
                postRespository.save(updatePost);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Post " + updatePost.getTitle() + "has been updated sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Post cant not be updated because you are not owner!!"))
                        .build();
            }
        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse deletePost(String token, PostRequest postRequest) {
        try {

            int organizationId = activityRepository.findById(postRequest.getActivityId()).getOrganizationId();
            if (organizationId == jwtService.getId(token)) {
                postRespository.deleteById(postRequest.getId());
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Post has been deleted sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Post cant not be deleted because you are not owner!!"))
                        .build();
            }

        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }

    }
    @Override
    public List<Post> SelectAllPost(PostRequest postRequest) {
        // TODO Auto-generated method stub
        try {

           return  postRespository.findByActivityId(postRequest.getActivityId());

        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }

    @Override
    public List<Post> SelectAll() {
        try {
            List<Post> postlList = postRespository.findAll();
            return postlList;
        } catch (Exception e) {
            // TODO: handle exception
            return null;
        }
    }
}
