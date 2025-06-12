package DesignPatterns.Creational.builder;

public class Student {

    String name;
    int age;
    String univName;
    double psp;
    String batch;
    int gradYear;
    String phoneNumber;

    public Student(Builder builder){
        // Validations start
        if(builder.getAge()<20)
            throw new RuntimeException("Age is less than 20.");

        if(builder.getGradYear()>2023)
            throw new RuntimeException("Grad year shouldn't be more than 2023.");

        this.name = builder.name;
        this.age = builder.age;
        this.batch = builder.batch;
        this.gradYear = builder.gradYear;
        
    }
}
