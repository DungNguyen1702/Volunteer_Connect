package com.PBL5.VolunteerConnection.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/v1")
public class LoginController {
    @GetMapping("/login")
    String login(){
        return "login";
    }
}
