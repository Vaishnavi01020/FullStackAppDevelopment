package com.codemancer.ranjith.service;

import java.util.List;

import com.codemancer.ranjith.dto.request.UserRequest;
import com.codemancer.ranjith.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

}
