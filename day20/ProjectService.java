package com.example.spring.Art.service;

import java.util.List;

import com.example.spring.Art.request.ProjectRequestDto;
import com.example.spring.Art.response.ProjectResponseDto;




public interface ProjectService {

    boolean saveProject(ProjectRequestDto projectRequest);

    List<ProjectResponseDto> getAllProjects();

    boolean updateProject(String projectId, ProjectRequestDto projectRequest);

    boolean deleteProject(String projectId);
    
}
