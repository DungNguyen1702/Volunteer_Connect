package com.PBL5.VolunteerConnection.service;

import com.PBL5.VolunteerConnection.dto.ActivityDTO;
import com.PBL5.VolunteerConnection.dto.PostActivityDetailDTO;
import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Post;
import com.PBL5.VolunteerConnection.repository.AccountRepository;
import com.PBL5.VolunteerConnection.repository.UserRespository;
import com.PBL5.VolunteerConnection.request.ActivityRequest;
import com.PBL5.VolunteerConnection.request.CandidateRequest;
import com.PBL5.VolunteerConnection.response.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.PBL5.VolunteerConnection.model.Activity;
import com.PBL5.VolunteerConnection.repository.ActivityRepository;

import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ActivityServiceImpl implements ActivityService {
    @Autowired
    private ActivityRepository activityRepository;
    @Autowired
    private AccountService accountService;
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private JwtService jwtService;
    @Autowired
    private UserRespository userRespository;
    @Autowired
    private CandidateService candidateService;
    @Override
    public ActivityResponse createActivity(String token, ActivityRequest activity) {
        try {

            int organizationId = jwtService.getId(token);
            Activity creActivity = new Activity(activity.getImage(), activity.getEmail(), activity.getName(),
                                        activity.getType(), activity.getDeadline(), activity.getDateStart(), activity.getDateEnd(), activity.getCountry(),
                                        activity.getLocation(), organizationId,
                                        activity.getContent());
            creActivity.setIsDeleted(false);
            activityRepository.save(creActivity);
            ActivityResponse activityResponse = new ActivityResponse(creActivity, 0, 0, 0, 0);
            return activityResponse;
        } catch (Exception e) {
            // TODO: handle exception
            return ActivityResponse.builder().error_message("Exception from server")
                    .build();
        }
    }

    @Override
    public StatusResponse updateActivity(String token, ActivityRequest updateReq) {
        // TODO Auto-generated method stub
        try {

            Activity updateActivity = activityRepository.findById(updateReq.getId());
            if (updateActivity.getOrganizationId() == jwtService.getId(token)){
                updateActivity.setImage(updateReq.getImage());
                updateActivity.setEmail(updateReq.getEmail());
                updateActivity.setDeadline(updateReq.getDeadline());
                updateActivity.setDateStart(updateReq.getDateStart());
                updateActivity.setDateEnd(updateReq.getDateEnd());
                updateActivity.setCountry(updateReq.getCountry());
                updateActivity.setLocation(updateReq.getLocation());
                updateActivity.setContent(updateReq.getContent());
                updateActivity.setUpdateAt(Date.valueOf(LocalDate.now()));
                activityRepository.save(updateActivity);
                return StatusResponse.builder()
                        .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                                .body("Activity " + updateActivity.getName() + "has been updated sucessfully!!"))
                        .build();
            }
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED)
                            .body("You are not owner"))
                    .build();

        } catch (Exception e) {
            // TODO: handle exception
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }

    @Override
    public StatusResponse deleteActivity(String token, ActivityRequest deleteRequest) {
        // TODO Auto-generated method stub
        try {
            Activity deleteActivity = activityRepository.findById(deleteRequest.getId());
                deleteActivity.setIsDeleted(true);
                System.out.print(1);
                activityRepository.save(deleteActivity);
            return StatusResponse.builder()
                    .success(ResponseEntity.status(HttpStatus.ACCEPTED).body("Activity has been deleted sucessfully!!"))
                    .build();
        } catch (Exception e) {
            return StatusResponse.builder()
                    .fail(ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Exception from server!! " + e))
                    .build();
        }
    }



    @Override
    public List<ActivityResponse> getAllActivity(String token) {
        int organizationId = jwtService.getId(token);
        List<ActivityResponse> activityResponseList = new ArrayList<>();
        List<Object[]> activityDTOS = activityRepository.getListActivityDetail(organizationId);
        for (Object[] result : activityDTOS) {
            ActivityDTO activityDTO = new ActivityDTO((Activity) result[0], (Long) result[1], (Long) result[2], (Long) result[3], (Long) result[4]);
            activityResponseList.add(new ActivityResponse(activityDTO.getActivity(), activityDTO.getApplyFormNumbers(), activityDTO.getComments(), activityDTO.getParticipants(), activityDTO.getPostNumbers()));

        }
        return activityResponseList;
    }

    @Override
    public ActivityDetailResponse getActivityDetail(String token, int id) {
        int organizationId = jwtService.getId(token);
        List<Object[]> activityDTO = activityRepository.getActivityWithPostsAndCounts(id);
        Activity activityDetail = (Activity)activityDTO.get(0)[0];
        Account organization = accountRepository.findById(activityDetail.getOrganizationId());
        List< PostActivityDetailDTO> postActivityDetailDTOS = new ArrayList<>();
        long registrationCount = (Long) activityDTO.get(0)[2];
        long totalComments = 0;
        for (Object[] result : activityDTO) {
            Post post = (Post) result[1];
            Long commentCount = (Long) result[3];
            totalComments += commentCount;
            postActivityDetailDTOS.add(new PostActivityDetailDTO(post, commentCount));
        }
        List<CandidateDetailResponse> candidates = candidateService.getCandidateDetail(token, id);
        int postNumber = postActivityDetailDTOS.size();
        boolean isCandidate = false;
        Account candidate = accountRepository.findById(jwtService.getId(token));
        if (jwtService.getRole(token)[0].equals("1") && !candidates.isEmpty()){
            for (CandidateDetailResponse candidateDetailResponse : candidates){
                if (candidateDetailResponse.getUser().getId() == candidate.getUser().getId()){
                    isCandidate = true;
                }
            }
        }
        if(organization.getId() == jwtService.getId(token) || isCandidate){
            return new ActivityDetailResponse(new ActivityResponse(activityDetail,registrationCount, totalComments,candidates.size() ,  postNumber), postActivityDetailDTOS,
                    new AccountResponse(organization), candidates);
        }
        return ActivityDetailResponse.builder().error_message("You are not owner").build();
//        return new ActivityDetailResponse(new ActivityResponse(activityDetail), null, 0, 0,
//                null,null);
    }

    @Override
    public List<ActivityResponse> getAllActivityByCandidate(String token) {
        int accountId = jwtService.getId(token);
        int userId = userRespository.findByAccountId(accountId).getId();
        List<ActivityResponse> activityResponseList = new ArrayList<>();
        List<Object[]> activityDTOS = activityRepository.getListActivityDetailByCandidate(userId);
        for (Object[] result : activityDTOS) {
            ActivityDTO activityDTO = new ActivityDTO((Activity) result[0], (Long) result[1], (Long) result[2], (Long) result[3], (Long) result[4]);
            activityResponseList.add(new ActivityResponse(activityDTO.getActivity(), activityDTO.getApplyFormNumbers(), activityDTO.getComments(), activityDTO.getParticipants(), activityDTO.getPostNumbers()));

        }
        return activityResponseList;
    }


}
