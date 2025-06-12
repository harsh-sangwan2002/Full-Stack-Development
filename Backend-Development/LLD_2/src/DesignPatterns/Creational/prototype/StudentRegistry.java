package DesignPatterns.Creational.prototype;

import java.util.HashMap;
import java.util.Map;

public class StudentRegistry {

    private Map<String,Student> students = new HashMap<>();

    void registerStudent(String key, Student student) {
        students.put(key, student);
    }

    public Student get(String key){
        Student student = students.get(key);
        if (student != null) {
            return student.clone();
        }
        return null;
    }
}
