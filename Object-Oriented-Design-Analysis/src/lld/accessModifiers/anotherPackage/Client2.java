package lld.accessModifiers.anotherPackage;

import lld.accessModifiers.somePackage.Student;

public class Client2 {

    public static void main(String[] args) {

        Student stu = new Student();
//        stu.univName = "IIT";
//        stu.batch = "Dec_2024";
        stu.parentName = "Kuldeep";
    }
}
