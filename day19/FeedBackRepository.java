package com.example.artnest.feedback.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.artnest.feedback.model.FeedBack;
import com.google.common.base.Optional;

@Repository
public interface FeedBackRepository extends JpaRepository<FeedBack,String>{
    Optional<FeedBack> findById(Long FeedbackId);
    Optional<FeedBack> existsByFeedbackName(String FeedbackName);
    void deleteById(String FeedbackId);
}
