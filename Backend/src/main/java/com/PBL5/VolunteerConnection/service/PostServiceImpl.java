package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.dto.PostActivitiesDTO;
import com.PBL5.VolunteerConnection.dto.PostDetailDTO;
import com.PBL5.VolunteerConnection.model.*;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.LikePostRepository;
import com.PBL5.VolunteerConnection.repository.PostCommentRepository;
import com.PBL5.VolunteerConnection.repository.PostRespository;
import com.PBL5.VolunteerConnection.request.PostRequest;
import com.PBL5.VolunteerConnection.response.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class PostServiceImpl implements PostService {
    @Autowired
    private PostRespository postRespository;
    @Autowired
    private LikePostRepository likePostRepository;
    @Autowired
    private PostCommentRepository postCommentRepository;
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
                updatePost.setUpdateAt(LocalDate.now());
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
    public List<PostsActivitiesResponse> selectAll() {
        // if (token.isEmpty()){
        List<PostsActivitiesResponse> postsActivitiesResponseArrayList = new ArrayList<>();
        List<PostActivitiesDTO> postDetailDTOS = postRespository.findAllPostsActivities();
        for (PostActivitiesDTO postDetailDTO : postDetailDTOS) {
            Post post = postDetailDTO.getPost();
            Activity activity = postDetailDTO.getActivity();
            long participants = postDetailDTO.getParticipants();
            long comments = postDetailDTO.getComments();
            postsActivitiesResponseArrayList.add(new PostsActivitiesResponse(
                    new ActivityResponse(activity, 0, comments, participants, 0), post, false, comments));
        }
        return postsActivitiesResponseArrayList;

        // }

        // return null;
    }

    @Override
    public List<PostsActivitiesResponse> selectAllByAccountId(String token) {
        // if (token.isEmpty()){
        List<PostsActivitiesResponse> postsActivitiesResponseArrayList = new ArrayList<>();
        List<PostActivitiesDTO> postDetailDTOS = postRespository.findAllPostsActivities();
        List<Post> likePost = postRespository.findAllPostByAccountId(jwtService.getId(token));
        for (PostActivitiesDTO postDetailDTO : postDetailDTOS) {
            Post post = postDetailDTO.getPost();
            Activity activity = postDetailDTO.getActivity();
            long participants = postDetailDTO.getParticipants();
            long comments = postDetailDTO.getComments();
            if (likePost.contains(post)) {
                postsActivitiesResponseArrayList.add(new PostsActivitiesResponse(
                        new ActivityResponse(activity, 0, comments, participants, 0), post, true, comments));
            }
            postsActivitiesResponseArrayList.add(new PostsActivitiesResponse(
                    new ActivityResponse(activity, 0, comments, participants, 0), post, false, comments));
        }
        return postsActivitiesResponseArrayList;

        // }

        // return null;
    }

    @Override
    public List<PostsActivitiesResponse> selectAllLikePostByAccountID(String token) {
        // if (token.isEmpty()){
        List<PostsActivitiesResponse> postsActivitiesResponseArrayList = new ArrayList<>();
        List<PostActivitiesDTO> postDetailDTOS = postRespository.findAllPostsActivities();
        List<Post> likePost = postRespository.findAllPostByAccountId(jwtService.getId(token));
        for (PostActivitiesDTO postDetailDTO : postDetailDTOS) {
            Post post = postDetailDTO.getPost();
            Activity activity = postDetailDTO.getActivity();
            long participants = postDetailDTO.getParticipants();
            if (likePost.contains(post)) {
                postsActivitiesResponseArrayList.add(new PostsActivitiesResponse(
                        new ActivityResponse(activity, 0, 0, 0, participants), post, true, participants));
            }
        }
        return postsActivitiesResponseArrayList;
    }

    @Override
    public StatusResponse createLikePost(String token, PostRequest post) {
        try {
            LikePost checklikePost = likePostRepository.findByAccountIdAndPostId(jwtService.getId(token), post.getId());
            if (checklikePost != null) {
                System.out.print(1234);
                likePostRepository.deleteById(checklikePost.getId());
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("Account " + checklikePost.getAccountId() + " unlike Post "
                                        + checklikePost.getPostId()))
                        .build();
            } else {
                LikePost likePost = new LikePost(jwtService.getId(token), post.getId());
                likePost.setCreatedAt(Date.valueOf(LocalDate.now()));
                likePostRepository.save(likePost);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("Account " + likePost.getAccountId() + "liked Post" + likePost.getPostId()))
                        .build();
            }

        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse deleteLikePost(String token, PostRequest post) {
        try {
            if (post.getAccountId() == jwtService.getId(token)) {
                LikePost likePost = likePostRepository.findByAccountIdAndPostId(post.getAccountId(), post.getId());
                likePostRepository.deleteById(likePost.getId());
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.CREATED)
                                .body("Account " + likePost.getAccountId() + "unlike Post " + likePost.getPostId()))
                        .build();
            } else {
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                                .body("you are not owner"))
                        .build();
            }

        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public PostDetailResponse getPostDetail(int id) {
        PostDetailDTO postDetailDTO = postRespository.findPostDetailById(id);
        List<PostComment> postComments = postCommentRepository.findByPostId(id);
        postComments.removeIf(postComment -> postComment.isDeleted() || postComment.getComment_parentId() != null);
        PostDetailResponse postDetailResponse = new PostDetailResponse(
                new ActivityResponse(postDetailDTO.getActivity(), postDetailDTO.getParticipants()),
                new PostResponse(postDetailDTO.getPost()), new AccountResponse(postDetailDTO.getOrganization()),
                postComments);
        return postDetailResponse;
    }

}
