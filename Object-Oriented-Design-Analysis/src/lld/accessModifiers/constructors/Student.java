package lld.accessModifiers.constructors;

public class Student {

    private String name;
    String univName;
    protected  String batch;
    public String parentName;

    public Student(){
        System.out.println("Student class constructor called.");
    }

    public void doSomething(){
        System.out.println("Doing something.");
    }
}
