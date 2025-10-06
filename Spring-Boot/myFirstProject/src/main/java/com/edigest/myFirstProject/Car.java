package com.edigest.myFirstProject;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

// @Component (Creates a bean) + something
@RestController
public class Car {

    // Dependency injection
    @Autowired
    private Dog dog;

    @GetMapping("/ok")
    public String ok(){
        return dog.fun();
    }
}
