package com.PBL5.VolunteerConnection;

import com.PBL5.VolunteerConnection.dto.CandidateDetailDTO;
import com.PBL5.VolunteerConnection.model.Account;
import com.PBL5.VolunteerConnection.model.Candidate;
import com.PBL5.VolunteerConnection.model.User;
import com.PBL5.VolunteerConnection.repository.CandidateRepository;
import com.PBL5.VolunteerConnection.response.CandidateDetailResponse;
import com.PBL5.VolunteerConnection.response.UserDetailResponse;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@SpringBootApplication
@EnableWebSecurity
@EnableJpaRepositories
public class VolunteerConnectionApplication {

	public static void main(String[] args) {
		SpringApplication.run(VolunteerConnectionApplication.class, args);
	}
	// @Bean
	// CommandLineRunner run(CandidateRepository candidateRepository){
	// return args -> {
	// List<CandidateDetailResponse> candidateDetailResponseList = new
	// ArrayList<>();
	// List<CandidateDetailDTO> candidateDetailDTOList =
	// candidateRepository.findAllByActivityId(1);
	// for(CandidateDetailDTO candidateDetailDTO : candidateDetailDTOList){
	// Candidate candidate = candidateDetailDTO.getCandidate();
	// Account account = candidateDetailDTO.getAccount();
	// User user = candidateDetailDTO.getUser();
	// candidateDetailResponseList.add(new
	// CandidateDetailResponse(candidate.getId(),
	// new UserDetailResponse(user, account), candidate.getActivityId(),
	// candidate.getCertificate(),
	// candidate.getDateCertificate(),candidate.getCreatedAt()));
	// }
	// System.out.print(candidateDetailResponseList);
	// };
	// }
}
