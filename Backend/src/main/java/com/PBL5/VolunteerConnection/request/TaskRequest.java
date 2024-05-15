package com.PBL5.VolunteerConnection.request;

import java.sql.Date;
import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TaskRequest {
    private int id;
    private LocalDate dateStart;
    private LocalDate dateEnd;
    private String description;
    private String title;
    private int status;
    private int tableTaskId;
    private Integer candidateId;
    private int activityId;
}
