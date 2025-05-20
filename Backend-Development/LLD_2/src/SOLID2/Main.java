package SOLID2;

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

        Penguin penguin = new Penguin("Penguin", 1, 10, "Blue", "Flying");
        penguin.eat();
        penguin.walk();

        Bird b = new Eagle("Eagle", 1, 10, "Blue", "Flying");
        b.eat();
        b.walk();
        ((Eagle) b).fly();

        b = new Penguin("Penguin", 1, 10, "Blue", "Flying");
        b.eat();
        b.walk();
    }
}
