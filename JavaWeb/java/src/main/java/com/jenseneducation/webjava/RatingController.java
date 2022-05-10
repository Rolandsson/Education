package com.jenseneducation.webjava;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/scores")
@CrossOrigin("*")
public class RatingController {
    private Map<String, Rating> ratings = new HashMap<>();

    {
        var rating = new Rating();
        rating.setRating(4.0);
        rating.setTimesRated(1);
        ratings.put("random-maping", rating);

        rating = new Rating();
        rating.setRating(3.0);
        rating.setTimesRated(2);
        ratings.put("casual", rating);
    }

    @GetMapping
    public ResponseEntity<Map<String, Rating>> getRatings() throws InterruptedException {
        return ResponseEntity.ok(ratings);
    }
    
    @GetMapping("/{reference}")
    public ResponseEntity<Rating> getRating(@PathVariable("reference") String ref) {
        return ratings.containsKey(ref) ? 
            ResponseEntity.ok(ratings.get(ref)) :
            ResponseEntity.noContent().build();
    }

    @PostMapping("/{reference}")
    public ResponseEntity<Rating> getRating(
        @PathVariable("reference") String ref,
        @RequestParam("rate") double rate) {
        
        var refExist = ratings.containsKey(ref);
        HttpStatus status = refExist ? HttpStatus.OK : HttpStatus.CREATED;
        Rating rating = refExist ? ratings.get(ref) : new Rating();
        ratings.put(ref, rating.addRating(rate));
        return ResponseEntity.status(status).body(rating);
    }
}
