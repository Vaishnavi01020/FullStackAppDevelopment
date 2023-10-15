package com.example.spring.Art.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.spring.Art.model.Artwork;

//import com.codeforge.SpringSecurity.model.Artwork;

 @Repository
public interface ArtworkRepository extends JpaRepository<Artwork, String> {

    Optional<Artwork> findById(String  artworkid);

    Optional<Artwork> existsByTitle(String title);

    void deleteById(String artworkId);
}

