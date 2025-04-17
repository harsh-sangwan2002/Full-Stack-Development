package DesignPatterns.builder.Production;

public class Client {

    public static void main(String[] args) {

        Student student = Student.getBuilder()
                .setName("Zahidul")
                .setAge(25)
                .setGradYear(2024)
                .setPhoneNumber("1234")
                .build();
    }
}
