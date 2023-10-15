package com.example.spring.Art.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.spring.Art.request.ArtworkRequestDto;
import com.example.spring.Art.response.ArtworkResponseDto;
import com.example.spring.Art.service.ArtworkService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/artwork")
@RequiredArgsConstructor
public class ArtworkController {
    private final ArtworkService artworkService;
    @PostMapping("/saveartwork")
	public ResponseEntity<String> saveArtWork(@RequestBody ArtworkRequestDto artworkRequest){
		boolean isDataSaved=artworkService.saveArtwork(artworkRequest); 
		return isDataSaved ? ResponseEntity.status(200).body("Artwork saved successfully"):
			ResponseEntity.status(403).body("Something went wrong");
	}

	@GetMapping("/allartworks")
	public ResponseEntity<List<ArtworkResponseDto>> getAllArtworks() {
	 		List<ArtworkResponseDto> artworkList=artworkService.getAllArtworks();
		 	return artworkList.size()>0? ResponseEntity.status(200).body(artworkList):
		 		ResponseEntity.status(404).body(artworkList);
	}

    @PutMapping("/updateartwork/{artworkId}")
    public ResponseEntity<String> updateartwork(@PathVariable String artworkId, @RequestBody ArtworkRequestDto artworkRequest) {
        boolean isartworkUpdated = artworkService.updateArtwork(artworkId, artworkRequest);
            return isartworkUpdated ? ResponseEntity.status(200).body("Artwork updated successfully") :
                ResponseEntity.status(404).body("Artwork not found with ID: " + artworkId);
    }

    @DeleteMapping("/deleteartwork/{artworkId}")
    public ResponseEntity<String> deleteartwork(@PathVariable String artworkId) {
        
        boolean isartworkDeleted = artworkService.deleteArtwork(artworkId);
            return isartworkDeleted ? ResponseEntity.status(200).body("Artwork deleted successfully") :
                ResponseEntity.status(404).body("Artwork not found with ID: " + artworkId);
    }
    
}
