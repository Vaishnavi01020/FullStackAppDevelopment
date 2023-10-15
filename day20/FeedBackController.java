package com.example.artnest.feedback.controller;

//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//import com.example.artnest.feedback.service.FeedBackService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/feedback")
@RequiredArgsConstructor
public class FeedBackController {
    //private final FeedBackService feedBackService;
    @GetMapping("/get")
    public String getMapping()
    {
        return "hello world";
    }
}
