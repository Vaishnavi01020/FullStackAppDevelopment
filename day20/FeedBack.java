package com.example.artnest.feedback.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
@Entity
@Table(name="_feedback")
public class FeedBack {
    @Id
    @GeneratedValue(strategy=GenerationType.UUID)
    private Long FeedbackId;
    private String FeedbackName;
    private Long UserId;
    public FeedBack(Long FeedbackId,String FeedbackName,Long UserId)
    {
        this.FeedbackId=FeedbackId;
        this.FeedbackName=FeedbackName;
        this.UserId=UserId;
    }
    
}
