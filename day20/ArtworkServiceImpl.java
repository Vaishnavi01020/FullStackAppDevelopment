package com.example.spring.Art.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.spring.Art.model.Artwork;
import com.example.spring.Art.repository.ArtworkRepository;
import com.example.spring.Art.request.ArtworkRequestDto;
import com.example.spring.Art.response.ArtworkResponseDto;
import com.example.spring.Art.service.ArtworkService;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;


@Service
@Transactional
@RequiredArgsConstructor
public class ArtworkServiceImpl implements ArtworkService {

    private final ArtworkRepository artworkRepository;

    @Override
    public boolean saveArtwork(ArtworkRequestDto artworkRequest) {
        Optional<Artwork> isartworkOptional=artworkRepository.existsByTitle(artworkRequest.getTitle());
		if(isartworkOptional.isPresent()){
			var artwork=Artwork.builder()
					.title(artworkRequest.getTitle())
					.description(artworkRequest.getDescription())
					.file(artworkRequest.getFile())
					.build();
			artworkRepository.save(artwork);
			return true;
		}
		else{
			return false;
		}
    }

    @Override
    public List<ArtworkResponseDto> getAllArtworks() {
        List<Artwork> artworkList = artworkRepository.findAll();
		List<ArtworkResponseDto> artworkResponseList = new ArrayList<>();
	
		for (Artwork artwork : artworkList) {
			ArtworkResponseDto artworkResponse = new ArtworkResponseDto(); 
			artworkResponse.setTitle(artwork.getTitle());
			artworkResponse.setDescription(artwork.getDescription());
			artworkResponse.setFile(artwork.getFile());
		
	
			artworkResponseList.add(artworkResponse);
		}
	
		return artworkResponseList;
    }

    @Override
    public boolean updateArtwork(String artworkId, ArtworkRequestDto artworkRequest) {
        Optional<Artwork> optionalartwork = artworkRepository.findById(artworkId);
        if (optionalartwork.isPresent()) {
            Artwork artwork = optionalartwork.get();
           artwork.setTitle(artworkRequest.getTitle());
            artwork.setDescription(artworkRequest.getDescription());
            artwork.setFile(artworkRequest.getFile());
            artworkRepository.save(artwork);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean deleteArtwork(String artworkId) {
        Optional<Artwork> optionalartwork = artworkRepository.findById(artworkId);
        if (optionalartwork.isPresent()) {
           artworkRepository.deleteById(artworkId);
            return true;
        } else {
            return false;
        }
    }

}

