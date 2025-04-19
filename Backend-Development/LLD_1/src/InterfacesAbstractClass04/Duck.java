package InterfacesAbstractClass04;

interface Flyable{
    void fly();
}

interface Swimmable{
    void swim();
}

public class Duck implements Flyable, Swimmable{

    public void fly(){
        System.out.println("Duck is flying...");
    }

    public void swim(){
        System.out.println("Duck is swimming...");
    }

    public static void main(String[] args) {

        Duck duck = new Duck();
        duck.fly();
        duck.swim();
    }
}
