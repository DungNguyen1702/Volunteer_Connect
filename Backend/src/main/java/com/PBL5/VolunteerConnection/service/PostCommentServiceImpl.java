package com.PBL5.VolunteerConnection.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.PostComment;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.PostCommentRepository;
import com.PBL5.VolunteerConnection.repository.PostRespository;
import com.PBL5.VolunteerConnection.response.PostCommentRequest;
import com.PBL5.VolunteerConnection.response.StatusResponse;

@Service
public class PostCommentServiceImpl implements PostCommentService {
    @Autowired
    private PostCommentRepository postCommentRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private PostRespository postRespository;

    @Override
    public StatusResponse createPostComment(String token, PostCommentRequest postComment) {
        // TODO Auto-generated method stub
        try {
            int userCommentId = jwtService.getId(token);
            System.out.println(postComment.getComment_parentId());
            PostComment createPostComment = new PostComment(postComment.getPostId(),
                    postComment.getContent(), userCommentId);
            postCommentRepository.save(createPostComment);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.CREATED)
                            .body("PostComment " + createPostComment.getContent() + "has been created sucessfully!!"))
                    .build();
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse updatePostComment(String token, PostCommentRequest postComment) {
        // TODO Auto-generated method stub
        try {
            int userCommentId = jwtService.getId(token);
            if (userCommentId == postComment.getAccountId()) {
                PostComment updateComment = postCommentRepository.findById(postComment.getId());
                updateComment.setContent(postComment.getContent());
                updateComment.setUpdatedAt(Date.valueOf(LocalDate.now()));
                postCommentRepository.save(updateComment);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Comment " + updateComment.getContent() + "has been updated sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("Comment cant not be updated because you are not owner!!"))
                        .build();
            }
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse deletePostComment(String token, PostCommentRequest postComment) {
        // TODO Auto-generated method stub
        try {
            int userCommentId = jwtService.getId(token);
            int ownerPostId = 0;
            if (postComment.getPostId() != 0) {
                // ownerPostId = activityRepository.findById(postRespository.findById(
                // postComment.getPostId()).getActivityId()).getOrganizationId();
            }
            if (userCommentId == postComment.getAccountId() || ownerPostId == postComment.getAccountId()) {
                // postCommentRepository.deleteById(postComment.getId());
                PostComment deleteComment = postCommentRepository.findById(postComment.getId());
                deleteComment.setDeleted(true);
                postCommentRepository.save(deleteComment);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Comment " + postComment.getId() + "has been deleted sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("comment cant not be deleted because you are not owner!!"))
                        .build();
            }
        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public List<PostComment> selectAll() {
        // TODO Auto-generated method stub
        try {
            List<PostComment> listComments = postCommentRepository.findAll();
            return listComments;
        } catch (Exception e) {
            // TODO: handle exception
            System.out.println(e.toString());
            return null;
        }
    }

}
