package com.example.spring.Art.service;

//package com.example.spring.Art.service;

import com.example.spring.Art.model.User;
import com.example.spring.Art.repository.UserRepository;
import com.example.spring.Art.response.UserDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public List<UserDTO> getAllRegisteredUsers() {
        List<User> users = userRepository.findAll();
        List<UserDTO> userDTOs = new ArrayList<>();

        for (User user : users) {
            UserDTO userDTO = new UserDTO();
            userDTO.setId(user.getId());
            userDTO.setName(user.getName());
            userDTO.setEmail(user.getEmail());
            // Set other properties as needed
            userDTOs.add(userDTO);
        }

        return userDTOs;
    }

    // Other methods for user operations...
}
