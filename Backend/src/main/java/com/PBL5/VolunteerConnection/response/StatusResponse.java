package com.PBL5.VolunteerConnection.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseEntity;
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class    StatusResponse {
    private ResponseEntity<String> success;
    private ResponseEntity<String> fail;
}
