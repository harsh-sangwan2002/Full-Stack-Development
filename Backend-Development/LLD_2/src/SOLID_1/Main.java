package SOLID_1;

public class Main {

    public static void main(String[] args) {

        Crow crow = new Crow("Crow", 1, 10, "Blue", "Flying");
        crow.fly();
        crow.eat();
        crow.walk();

        Sparrow sparrow = new Sparrow("Sparrow", 1, 10, "Blue", "Flying");
        sparrow.fly();
        sparrow.eat();
        sparrow.walk();
    }
}
