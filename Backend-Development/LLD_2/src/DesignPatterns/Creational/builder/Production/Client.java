package DesignPatterns.Creational.builder.Production;

public class Client {

    public static void main(String[] args) {

//        Builder builder = new Builder();
//        Student builder = Student.getBuilder();
//        builder.setName("Harsh");
//        builder.setAge(21);
//        builder.setBatch("Acad_Nov_23");
//        builder.setUnivName("IP University");
//        builder.setPsp(91.23);
//        builder.setGradYear(2022);
//        builder.setPhoneNumber("1234567890");

        // Method chaining using Builder pattern
        Student student = Student.getBuilder()
                .setName("Harsh")
                .setAge(21)
                .setBatch("Acad_Nov_23")
                .setUnivName("IP University")
                .setPsp(91.23)
                .setGradYear(2022)
                .setPhoneNumber("1234567890")
                .build();

        System.out.println(student);
        System.out.println("DEBUG: Student created successfully!");
    }
}
