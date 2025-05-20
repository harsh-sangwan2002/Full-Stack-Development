package SOLID2;

public class Owl extends Bird implements Flying {

    public Owl(String name, int age, int weight, String color, String type) {
        super(name, age, weight, color, type);
    }

    @Override
    public void fly() {
        System.out.println("Owl is flying");
    }
}
