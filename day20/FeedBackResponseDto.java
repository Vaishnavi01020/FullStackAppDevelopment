package com.example.artnest.feedback.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedBackResponseDto {
     private Long FeedbackId;
    private String FeedbackName;
    private Long UserId;
}
