package SOLID1;

public class Eagle extends Bird{

    public Eagle(String name, int age, int weight, String color, String type) {
        super(name, age, weight, color, type);
    }

    @Override
    void fly() {
        System.out.println("Eagle is flying");
    }
}
