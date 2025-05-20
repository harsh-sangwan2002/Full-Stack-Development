package SOLID2;

public class Sparrow extends Bird implements Flying {

    public Sparrow(String name, int age, int weight, String color, String type) {
        super(name, age, weight, color, type);
    }

    @Override
    public void fly() {
        System.out.println("Sparrow is flying");
    }
}
