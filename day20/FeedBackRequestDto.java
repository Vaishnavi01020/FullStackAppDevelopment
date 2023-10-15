package com.example.artnest.feedback.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FeedBackRequestDto {
    private Long FeedbackId;
    private String FeedbackName;
    private Long UserId;
    
}
