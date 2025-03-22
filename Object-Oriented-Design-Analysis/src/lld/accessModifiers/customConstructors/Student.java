package lld.accessModifiers.customConstructors;

public class Student {

    public String name;
    public String batch;

    public Student(){
        System.out.println("Student constructor called.");
    }

    public Student(String name, String batch){
        this.name = name;
        this.batch = batch;
    }
}
