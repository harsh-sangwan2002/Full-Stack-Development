package SOLID_1;

public class Owl extends Bird{

    public Owl(String name, int age, int weight, String color, String type) {
        super(name, age, weight, color, type);
    }

    @Override
    void fly() {
        System.out.println("Owl is flying");
    }
}
