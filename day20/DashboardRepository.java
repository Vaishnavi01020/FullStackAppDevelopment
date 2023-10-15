package com.example.spring.Art.repository;

import java.util.List;

//package com.example.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.spring.Art.model.Dashboard;
@Repository
public interface DashboardRepository extends JpaRepository<Dashboard, Integer> {
    @Override
    List<Dashboard> findAll();
    Dashboard deleteById(Dashboard e);
}
