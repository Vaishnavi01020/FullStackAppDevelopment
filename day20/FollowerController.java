package com.example.spring.Art.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.spring.Art.model.Follower;
import com.example.spring.Art.request.FollowerRequestDto;
import com.example.spring.Art.service.FollowerService;

import java.util.List;

@RestController
@RequestMapping("/followers")
public class FollowerController {
    private final FollowerService followerService;

    @Autowired
    public FollowerController(FollowerService followerService) {
        this.followerService = followerService;
    }

    @PostMapping("/follow")
    public void followUser(@RequestBody FollowerRequestDto followerRequest) {
        Follower follower = new Follower();
        // Set the user and followerId based on the provided data
        follower.setId(followerRequest.getUserId());
        follower.setFollowerId(followerRequest.getFollowerId());
        followerService.saveFollower(follower);
    }

    @GetMapping("/followersList")
    public List<Follower> getFollowers(@RequestParam("userId") Long userId) {
        // Implement logic to fetch followers based on the given userId
        return followerService.getFollowersByUserId(userId);
    }
}
