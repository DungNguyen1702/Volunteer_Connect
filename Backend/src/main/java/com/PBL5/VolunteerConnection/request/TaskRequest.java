package com.PBL5.VolunteerConnection.request;

import java.sql.Date;
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
    private Date dateStart;
    private Date dateEnd;
    private String description;
    private String title;
    private int status;
    private int tableTaskId;
    private int candidateId;
}
