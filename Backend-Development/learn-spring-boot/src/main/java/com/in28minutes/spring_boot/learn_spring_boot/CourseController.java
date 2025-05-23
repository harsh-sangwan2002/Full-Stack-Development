package com.in28minutes.spring_boot.learn_spring_boot;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class CourseController {

	@RequestMapping("/courses")
	public List<Course> retrieveAllCourses(){
		return Arrays.asList(
				new Course(1,"Learn AWS","in28Minutes"),
				new Course(2,"Learn Java","in28Minutes"),
				new Course(3,"Learn Kubernetes","in28Minutes")
				);
	}
}
