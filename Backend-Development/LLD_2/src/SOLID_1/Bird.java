package SOLID_1;

abstract public class Bird {

    String name;
    int age;
    int weight;
    String color;
    String type;

    public Bird(String name, int age, int weight, String color, String type){
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.color = color;
        this.type = type;
    }

    abstract void fly();

    void makeSound(){
        System.out.println("I'm a bird!");
    }

    void eat(){
        System.out.println(this.name + " is eating!");
    }

    void walk(){
        System.out.println(this.name + " is walking!");
    }
}
