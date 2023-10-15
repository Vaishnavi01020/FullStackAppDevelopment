package com.example.artnest.feedback.service;

import java.util.List;

import com.example.artnest.feedback.request.FeedBackRequestDto;
import com.example.artnest.feedback.response.FeedBackResponseDto;

public interface FeedBackService {
    boolean saveFeedBack(FeedBackRequestDto feedBackRequest);
    List<FeedBackResponseDto> getAllFeedBack();
    boolean updateFeedBack(String FeedbackId,FeedBackRequestDto feedBackRequest);
    boolean deleteFeedBack(String FeedbackId);
}
