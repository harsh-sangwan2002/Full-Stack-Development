package SOLID_1;

public class Crow extends Bird{

    public Crow(String name, int age, int weight, String color, String type){
        super(name, age, weight, color, type);
    }

    @Override
    void fly() {
        System.out.println("Crow is flying");
    }
}
