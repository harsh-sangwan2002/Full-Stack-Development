package InterfacesAbstractClass04;

abstract class Animal{
    String name;

    Animal(String name){
        this.name = name;
    }

    abstract void makeSound();

    void sleep(){
        System.out.println(this.name + " is sleeping");
    }
}

public class Dog extends Animal {

    Dog(String name){
        super(name);
    }

    public void makeSound(){
        System.out.println(name+" says woof...");
    }
}
