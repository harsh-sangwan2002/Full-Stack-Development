package com.company.my_first_project;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyClass {

    @GetMapping("/hello")
    public String sayHello(){
        return "Hello!";
    }
}
