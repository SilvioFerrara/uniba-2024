package com.javainuse.bootreact.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ScoreController {

    private int score = 0;

    @GetMapping("/score")
    public int getScore() {
        return score;
    }

    @PostMapping("/score/increment")
    public int incrementScore() {
        score++;
        return score;
    }
}
