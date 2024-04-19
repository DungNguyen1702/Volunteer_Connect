package com.PBL5.VolunteerConnection;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
@EnableJpaRepositories
public class VolunteerConnectionApplication {

	public static void main(String[] args) {
		SpringApplication.run(VolunteerConnectionApplication.class, args);
	}
//	@Bean
//	CommandLineRunner run(AccountService accountService){
//		return args -> {
////			accountService.createAccount(new Account("nguyenkhoi10", "password", "Nguyen KHoi", "1"));
//			Account account = new Account("nguyenkhoi10", "password", "Nguyen KHoi", "1");
//			System.out.print(account.getAuthorities());
//		};
//	}
}
	