package com.codemancer.ranjith.service;

import com.codemancer.ranjith.dto.request.AuthenticationRequest;
import com.codemancer.ranjith.dto.request.RegisterRequest;
import com.codemancer.ranjith.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
