package com.example.spring.Art.service;


import java.util.List;

//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;

import com.example.spring.Art.model.Dashboard;
import com.example.spring.Art.repository.DashboardRepository;
import com.example.spring.Art.request.DashboardRequest;
import com.example.spring.Art.response.DashboardResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import java.util.List;

@Service
public class DashboardService {
    private final DashboardRepository dashboardRepository;

    @Autowired
    public DashboardService(DashboardRepository dashboardRepository) {
        this.dashboardRepository = dashboardRepository;
    }

    public List<Dashboard> getAllDashboards() {
        return dashboardRepository.findAll();
    }

    public Dashboard getDashboardById(int id) {
        return dashboardRepository.findById(id).orElse(null);
    }

    public Dashboard updateDashboard(int id, Dashboard dashboard) {
        if (dashboardRepository.existsById(id)) {
            dashboard.setId(id);
            return dashboardRepository.save(dashboard);
        }
        return null; // Handle not found
    }

    public boolean deleteDashboard(int id) {
        if (dashboardRepository.existsById(id)) {
            dashboardRepository.deleteById(id);
            return true;
        }
        return false; // Handle not found
    }

    public DashboardResponse createDashboard(DashboardRequest request) {
        Dashboard dashboard = new Dashboard();
        dashboard.setName(request.getName());
        dashboard.setProjectname(request.getProjectname());
        var dash = dashboardRepository.save(dashboard);
        DashboardResponse response = new DashboardResponse();
        response.setId(dash.getId());
        response.setName(dash.getName());
        response.setProjectname(dash.getProjectname());
        return response;
    }
}