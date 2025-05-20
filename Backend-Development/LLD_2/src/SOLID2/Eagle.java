package SOLID2;

public class Eagle extends Bird implements Flying {

    public Eagle(String name, int age, int weight, String color, String type) {
        super(name, age, weight, color, type);
    }

    @Override
    public void fly() {
        System.out.println("Eagle is flying");
    }
}
