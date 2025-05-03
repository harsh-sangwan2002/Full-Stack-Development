package DesignPatterns.builder.Pattern;

public class Client {

    public static void main(String[] args) {

        Builder builder = Student.getBuilder();

        builder.setName("Zaidul");
        builder.setAge(22);
        builder.setBatch("Acad2024");
        builder.setPhoneNumber("1234567890");
        builder.setPsp(1.22);
        builder.setGradYear(2022);
        builder.setUnivName("GGSIPU");

        Student student = new Student(builder);
        System.out.println("DEBUG");
    }
}
