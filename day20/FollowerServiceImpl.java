package com.example.spring.Art.service.impl;
import lombok.AllArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.spring.Art.model.Follower;
import com.example.spring.Art.repository.FollowerRepository;
import com.example.spring.Art.service.FollowerService;

@AllArgsConstructor
@Service
public class FollowerServiceImpl implements FollowerService {
    @Autowired
    private final FollowerRepository followerRepository;

    @Override
    public void saveFollower(Follower follower) {
        followerRepository.save(follower);
    }
    @Override
    public List<Follower> getFollowersByUserId(Long userId) {
        // Implement your logic to fetch followers based on the given userId
        // For example, you can use the repository to query the followers.
        return followerRepository.findByUserId(userId);
    }
}
