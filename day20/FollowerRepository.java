package com.example.spring.Art.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.spring.Art.model.Follower;

//import com.codeforge.SpringSecurity.model.Follower;


public interface FollowerRepository extends JpaRepository<Follower, Long> {

    List<Follower> findByUserId(Long userId);

   
}
