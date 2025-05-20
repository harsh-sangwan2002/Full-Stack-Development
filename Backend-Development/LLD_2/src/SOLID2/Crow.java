package SOLID2;

public class Crow extends Bird implements Flying {

    public Crow(String name, int age, int weight, String color, String type){
        super(name, age, weight, color, type);
    }

    @Override
    public void fly() {
        System.out.println("Crow is flying");
    }
}
