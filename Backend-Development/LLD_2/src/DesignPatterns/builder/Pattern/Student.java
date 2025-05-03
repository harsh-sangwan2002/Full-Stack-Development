package DesignPatterns.builder.Pattern;

public class Student {

    String name;
    int age;
    String univName;
    double psp;
    String batch;
    int gradYear;
    String phoneNumber;

    public static Builder getBuilder(){
        return new Builder();
    }

    public Student(Builder builder){

        this.name = builder.getName();
        this.age = builder.getAge();
        this.univName = builder.getUnivName();
        this.psp = builder.getPsp();
        this.batch = builder.getBatch();
        this.gradYear = builder.getGradYear();
        this.phoneNumber = builder.getPhoneNumber();
    }
}
