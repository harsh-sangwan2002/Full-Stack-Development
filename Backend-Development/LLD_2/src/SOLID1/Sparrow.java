package SOLID1;

public class Sparrow extends Bird{

    public Sparrow(String name, int age, int weight, String color, String type) {
        super(name, age, weight, color, type);
    }

    @Override
    void fly() {
        System.out.println("Sparrow is flying");
    }
}
