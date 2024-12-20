package lld.accessModifiers.anotherPackage;

import lld.accessModifiers.somePackage.Student;

public class StudentChild extends Student  {

    public static void main(String[] args) {

        StudentChild stu = new StudentChild();
//        stu.univName = "IIT";
        stu.batch = "Dec_2024";
        stu.parentName = "Kuldeep";
    }
}
