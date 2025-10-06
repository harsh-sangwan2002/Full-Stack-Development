package lld.accessModifiers.customConstructors;

public class Client {

    public static void main(String[] args) {

        Student stu = new Student();
        Student stu2 = new Student("Harsh","Dec_2023");

        System.out.println(stu);
        System.out.println(stu2);
    }
}
