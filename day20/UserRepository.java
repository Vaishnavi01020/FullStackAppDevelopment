package com.example.spring.Art.repository;

import java.util.List;
//import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;

import com.example.spring.Art.model.User;
//import com.example.spring.Art.model.UserProjection;
//import com.example.spring.Art.model.UserProjection;

public interface UserRepository extends JpaRepository<User,Integer>{
    // @Query("SELECT u.id AS id, u.username AS username, u.email AS email FROM User u")
    // List<UserProjection> findRegisteredUsers();
    Optional<User> findByName(String name);

    Object findByEmail(String username);
    //List<UserProjection> findRegisteredUsers();
    List<User> findAll();
}