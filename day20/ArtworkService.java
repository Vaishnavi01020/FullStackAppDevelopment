package com.example.spring.Art.service;
import java.util.List;

import com.example.spring.Art.request.ArtworkRequestDto;
import com.example.spring.Art.response.ArtworkResponseDto;




public interface ArtworkService {

    boolean saveArtwork(ArtworkRequestDto artworkRequest);

    List<ArtworkResponseDto> getAllArtworks();

    boolean updateArtwork(String artworkId, ArtworkRequestDto artworkRequest);

    boolean deleteArtwork(String artworkId);
    
}
