package com.example.spring.Art.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.Art.model.Dashboard;
import com.example.spring.Art.request.DashboardRequest;
import com.example.spring.Art.response.DashboardResponse;
import com.example.spring.Art.service.DashboardService;

import java.util.List;
//import java.util.Optional;
import java.util.stream.Collectors;

//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

//import java.util.List;

@RestController
@RequestMapping("/api/v1/dashboards")
public class DashboardController {
    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/get")
    public List<DashboardResponse> getAllDashboards() {
        // Convert entities to response objects here
        List<Dashboard> dashboards = dashboardService.getAllDashboards();
        // Convert Dashboard entities to DashboardResponse objects and return
        // You can use a mapping library like ModelMapper or manually convert them
        return convertToResponseList(dashboards);
    }

    @GetMapping("/{id}")
    public DashboardResponse getDashboard(@PathVariable int id) {
        Dashboard dashboard = dashboardService.getDashboardById(id);
        // Convert Dashboard entity to DashboardResponse and return
        return convertToResponse(dashboard);
    }

    @PostMapping("/post")
    public DashboardResponse createDashboard(@RequestBody DashboardRequest request) {
        return dashboardService.createDashboard(request);
    }

    @PutMapping("/{id}")
    public DashboardResponse updateDashboard(
            @PathVariable int id,
            @RequestBody DashboardRequest request) {
        Dashboard dashboard = convertToEntity(request);
        dashboard = dashboardService.updateDashboard(id, dashboard);
        // Convert Dashboard entity to DashboardResponse and return
        return convertToResponse(dashboard);
    }

    @DeleteMapping("/{id}")
    public boolean deleteDashboard(@PathVariable int id) {
        return dashboardService.deleteDashboard(id);
    }

    // Helper methods for conversion between request, response, and entity objects
    private Dashboard convertToEntity(DashboardRequest request) {
        // Implement the conversion here
        Dashboard dashboard = new Dashboard();
        dashboard.setName(request.getName());
        dashboard.setProjectname(request.getProjectname());
        return dashboard;
    }

    private DashboardResponse convertToResponse(Dashboard dashboard) {
        // Implement the conversion here
        DashboardResponse response = new DashboardResponse();
        response.setId(dashboard.getId());
        response.setName(dashboard.getName());
        response.setProjectname(dashboard.getProjectname());
        return response;
    }

    private List<DashboardResponse> convertToResponseList(List<Dashboard> dashboards) {
        // Implement the conversion here
        // Loop through the list of entities and convert them to response objects
        return dashboards.stream()
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }
}
