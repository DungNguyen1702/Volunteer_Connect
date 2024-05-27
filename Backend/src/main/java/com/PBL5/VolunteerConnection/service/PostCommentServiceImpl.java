package com.PBL5.VolunteerConnection.service;

import java.time.LocalDate;
import java.util.List;

import com.PBL5.VolunteerConnection.dto.PostDetailDTO;
import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.model.Notification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.PostComment;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;
import com.PBL5.VolunteerConnection.repository.NotificationRepository;
import com.PBL5.VolunteerConnection.repository.PostCommentRepository;
import com.PBL5.VolunteerConnection.repository.PostRespository;
import com.PBL5.VolunteerConnection.request.PostCommentRequest;
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
    @Autowired
    private NotificationRepository notificationRepository;
    // @Autowired
    // private SimpMessagingTemplate messagingTemplate;

    @Override
    public StatusResponse createPostComment(String token, PostCommentRequest postComment) {
        // TODO Auto-generated method stub
        try {
            int userCommentId = jwtService.getId(token);
            // System.out.println(postComment.getComment_parentId());
            PostComment createPostComment = new PostComment(postComment.getPostId(),
                    postComment.getContent(), userCommentId);
            if (postComment.getComment_parentId() != null) {
                createPostComment.setComment_parentId(postComment.getComment_parentId());
                createPostComment.setParentComment(postCommentRepository.findById((int) postComment.getComment_parentId()));
            }
            postCommentRepository.save(createPostComment);
            PostDetailDTO post = postRespository.findPostDetailById(postComment.getPostId());
            int id = post.getOrganization().getId();
            if (userCommentId != id) {
                String title = "New Comment on Your Post";
                String content = "Someone commented on your post. Check it out!";
                String image = "http://res.cloudinary.com/deei5izfg/image/upload/v1716544017/Mobile/dmjhvknxwy6wqtpz2g0n.png";
                Notification notification = new Notification(title, id, content, image);
                notification.setType(1);
                notification.setIdTO(postComment.getPostId());
                notificationRepository.save(notification);
            }

            // messagingTemplate.convertAndSendToUser(String.valueOf(id), "/notification",
            // notification); //user/userId/private

            int id2 = postCommentRepository.findById((int) postComment.getComment_parentId()).getAccountId();
            if (postComment.getComment_parentId() != null && id2 != userCommentId) {
                String title2 = "Reply to Your Comment";
                String content2 = "Someone replied to your comment on the post. Check it out!";
                String image2 = "http://res.cloudinary.com/deei5izfg/image/upload/v1716544119/Mobile/hnwdserkqadpdzqmuek6.png";
                Notification notification2 = new Notification(title2, id2, content2, image2);
                notification2.setType(2);
                notification2.setIdTO(postComment.getPostId());
                notificationRepository.save(notification2);
                // if(id2 != id){
                // messagingTemplate.convertAndSendToUser(String.valueOf(id2), "/notification",
                // notification2); //user/userId/private
                // }
            }
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.CREATED)
                            .body("PostComment " + createPostComment.getContent() + "has been created sucessfully!!"))
                    .data(createPostComment.getId())
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
            PostComment updateComment = postCommentRepository.findById(postComment.getId());
            if (updateComment.getAccountId() == userCommentId) {
                updateComment.setContent(postComment.getContent());
                updateComment.setUpdatedAt(LocalDate.now());
                postCommentRepository.save(updateComment);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Comment " + updateComment.getContent() + "has been updated sucessfully!!"))
                        .build();
            } else {
                return StatusResponse.builder()
                        .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
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
    public StatusResponse deletePostComment(String token, PostCommentRequest commentReq) {
        // TODO Auto-generated method stub
        try {
            String role = jwtService.getRole(token)[0];
            int accountId = jwtService.getId(token);
            PostComment postComment = postCommentRepository.findById(commentReq.getId());
            if (role.equals("1")) {
                if (postComment.getAccountId() == accountId) {
                    postComment.setDeleted(true);
                    postCommentRepository.save(postComment);
                    return StatusResponse.builder()
                            .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                    .body("Comment " + postComment.getId() + "has been deleted sucessfully!!"))
                            .build();

                }
            } else if (role.equals("2")) {
                Activity activity = activityRepository.findById(postRespository.findById(
                        postComment.getPostId()).getActivityId());
                if (activity.getOrganizationId() == accountId) {
                    postComment.setDeleted(true);
                    postCommentRepository.save(postComment);
                    return StatusResponse.builder()
                            .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                    .body("Comment " + postComment.getId() + "has been deleted sucessfully!!"))
                            .build();
                }
            }
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE)
                            .body("comment cant not be deleted because you are not owner!!"))
                    .build();
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
