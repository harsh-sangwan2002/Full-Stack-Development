// This is the base package for component scanning
package com.edigest.myFirstProject;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// This annotation is applicable only on the main class - does three works
// 1. @Configuration
// 2. @EnableAutoConfiguration
// 3. @ComponentScan - IOC Container / Component Scan for beans and contains it
@SpringBootApplication
public class MyFirstProjectApplication {

	public static void main(String[] args) {
		SpringApplication.run(MyFirstProjectApplication.class, args);
	}

}
