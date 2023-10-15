package com.example.spring.Art.service;

import java.util.*;
//import com.codeforge.SpringSecurity.model.Follower;

import com.example.spring.Art.model.Follower;

public interface FollowerService {
    void saveFollower(Follower follower);
    
    List<Follower> getFollowersByUserId(Long userId);
}