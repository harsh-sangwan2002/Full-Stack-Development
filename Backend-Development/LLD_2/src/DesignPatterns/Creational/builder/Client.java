package DesignPatterns.Creational.builder;

public class Client {

    public static void main(String[] args) {

        Builder builder = new Builder();
        builder.setName("Harsh");
        builder.setAge(21);
        builder.setBatch("Acad_Nov_23");
        builder.setUnivName("IP University");
        builder.setPsp(91.23);
        builder.setGradYear(2022);
        builder.setPhoneNumber("1234567890");

        Student student = new Student(builder);
        System.out.println(student);
        System.out.println("DEBUG: Student created successfully!");
    }
}
